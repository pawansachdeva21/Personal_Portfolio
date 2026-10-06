import { GoogleGenAI, Content } from "@google/genai";
import { NextResponse } from "next/server";
import profile from "@/knowledge/profile.json";

const ai = new GoogleGenAI({});

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

// Built once per server instance instead of reading the file on every request
const SYSTEM_INSTRUCTION = `You are Pawan Sachdeva's AI assistant.
You can use the following information to help answer questions, but if the question is unrelated, answer normally.

${profile.map((d) => `${d.title}:\n${d.content}`).join("\n\n")}`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function isValidMessages(messages: unknown): messages is ChatMessage[] {
  return (
    Array.isArray(messages) &&
    messages.length > 0 &&
    messages.every(
      (m) =>
        (m?.role === "user" || m?.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length <= MAX_MESSAGE_LENGTH
    ) &&
    messages[messages.length - 1].role === "user"
  );
}

function toGeminiContent(messages: ChatMessage[]): Content[] {
  return messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));
}

export async function POST(req: Request) {
  let messages: unknown;
  try {
    ({ messages } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValidMessages(messages)) {
    return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
  }

  // Keep only the most recent turns to bound token usage; history must
  // start with a user turn, so drop leading assistant messages (e.g. the
  // client's welcome message)
  const recent = messages.slice(-MAX_MESSAGES);
  const firstUser = recent.findIndex((m) => m.role === "user");
  const contents = toGeminiContent(recent.slice(firstUser));

  try {
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      history: contents.slice(0, -1),
      config: { systemInstruction: SYSTEM_INSTRUCTION },
    });

    const resultStream = await chat.sendMessageStream({
      message: contents[contents.length - 1].parts!,
    });

    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of resultStream) {
            if (chunk.text) controller.enqueue(encoder.encode(chunk.text));
          }
          controller.close();
        } catch (error) {
          console.error("Gemini stream error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}

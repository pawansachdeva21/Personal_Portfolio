import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Pawan Sachdeva, Senior Full Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview card shown when the site is shared (LinkedIn, WhatsApp, X)
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/profile.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse 80% 70% at 30% 0%, rgba(16,185,129,0.22), transparent 70%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(16,185,129,0.4)",
              background: "rgba(16,185,129,0.12)",
              color: "#6ee7b7",
              fontSize: 22,
            }}
          >
            Open to new opportunities
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 76,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.05,
            }}
          >
            Pawan Sachdeva
          </div>
          <div style={{ marginTop: 20, fontSize: 36, color: "#34d399" }}>
            Senior Full Stack &amp; AI Engineer
          </div>
          <div style={{ marginTop: 28, fontSize: 26, color: "#a1a1aa" }}>
            React · Next.js · Python · FastAPI · LangChain · RAG
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse only supports <img> */}
        <img
          src={photoSrc}
          width={360}
          height={450}
          style={{
            borderRadius: 28,
            border: "2px solid rgba(255,255,255,0.12)",
            objectFit: "cover",
          }}
          alt=""
        />
      </div>
    ),
    size
  );
}

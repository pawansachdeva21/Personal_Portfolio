import React from "react";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative isolate overflow-x-clip">
      {/* Ambient background: fading grid and emerald glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1100px]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div className="absolute left-1/2 top-[-200px] h-[600px] w-[min(1000px,100vw)] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/15" />
      </div>

      <Navbar />
      <main className="min-h-screen w-full max-w-6xl mx-auto px-5 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

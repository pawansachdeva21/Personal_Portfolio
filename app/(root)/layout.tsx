import React from "react";
import { Navbar } from "@/app/components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full max-w-6xl mx-auto px-5 lg:px-8">
        {children}
      </main>
    </>
  );
};

export default RootLayout;

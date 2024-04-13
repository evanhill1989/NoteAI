import React from "react";
import NavBar from "./NavBar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="m-auto max-w-7xl p-4">
        <div>{children}</div>
      </main>
    </>
  );
}

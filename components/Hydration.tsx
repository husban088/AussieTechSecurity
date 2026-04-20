"use client";

export default function Hydration({ children }: { children: React.ReactNode }) {
  // 🔥 No useState, no useEffect - instantly returns
  return <>{children}</>;
}

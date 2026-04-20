"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 🔥 Reduced from 1800ms to 800ms - foran load
    const timer = setTimeout(() => {
      setVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-white z-[99999] flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="absolute w-32 h-32 rounded-full border-4 border-blue-600 border-t-transparent animate-spin-slow"></div>
        {/* Logo */}
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl z-10">
          <img
            src="/images/footerlogo.png"
            alt="Logo"
            className="w-14 h-14 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-gray-100 z-[99999] flex items-center justify-center">
      {/* Logo + Ring Wrapper */}
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="absolute w-40 h-40 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

        {/* Inner soft ring (optional premium feel) */}
        <div className="absolute w-48 h-48 rounded-full border border-gray-300"></div>

        {/* Logo */}
        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-xl">
          <img
            src="/images/logotwo.png"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

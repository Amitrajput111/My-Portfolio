import React from "react";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Top Left Cyan Blob */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" />
      {/* Top Right Indigo Blob */}
      <div className="absolute top-0 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000" />
      {/* Bottom Center Blue Blob */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob animation-delay-4000" />
      
      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} 
      />
    </div>
  );
}

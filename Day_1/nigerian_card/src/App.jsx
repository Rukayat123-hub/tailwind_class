import React from "react";
import NigerianCard from "./NigerianCard";
import featuredImg from "./assets/Codeavour-1-300x249.png";

function App() {
  return (
    <div className="min-h-screen bg-[#f8faf7] flex items-center justify-center p-10">
      <NigerianCard
        category="Entertainment"
        image={featuredImg}
        headline="Nigerian Students Shine at Codeavour AI Challenge"
        excerpt="Young Nigerian innovators have impressed the global AI community with their outstanding performance at the annual Codeavour competition..."
        author="Odeleye Rukayat"
        date="Nov 12, 2025"
        
        link="odeleyerukayatajoke3@gmail.com"
        
      />
    </div>
  );
}

export default App;

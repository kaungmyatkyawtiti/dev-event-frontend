"use client";

import DotGrid from "@/components/ui/DotGrid";
import { useTheme } from "next-themes";

export default function Demo() {

  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div
      className="absolute inset-0 -z-10 min-h-screen 
      bg-[radial-gradient(circle_at_center,rgba(50,199,106,0.60),transparent_85%)]
      dark:bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.10),transparent_80%)]">
      <DotGrid
        dotSize={5}
        gap={15}

        baseColor={isDark ? "#002E00" : "#e0f7eb"}
        activeColor={isDark ? "#00FF00" : "#00CC00"}
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}

"use client";
import { createContext, useContext, useState } from "react";

type HoverContextType = {
  isHovering: boolean;
  setIsHovering: (hovering: boolean) => void;
};

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export function HoverProvider({ children }: { children: React.ReactNode }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HoverContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </HoverContext.Provider>
  );
}

export function useHover() {
  const context = useContext(HoverContext);
  if (context === undefined) {
    throw new Error("useHover must be used within a HoverProvider");
  }
  return context;
}

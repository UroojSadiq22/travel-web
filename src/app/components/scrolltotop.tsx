"use client";

import { useState, useEffect, RefObject } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScrollToTopProps {
    mainRef: RefObject<HTMLElement>;
  }

export default function ScrollToTop({ mainRef }: ScrollToTopProps) {
    const [isVisible, setIsVisible] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        setIsVisible(mainRef.current.scrollTop > 300);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [mainRef]);

  const scrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  
    return (
        <>
        {isVisible && (
            <div className="fixed bottom-10 right-10 z-50">
              <Button
                onClick={scrollToTop}
                className="rounded-full h-12 text-black font-bold bg-orange-500 shadow-2xl hover:bg-gray-500 transition-all"
              >
                <ChevronUp size={36} strokeWidth={3} />
              </Button>
            </div>
          )}
        </>
        
    );
  }
  
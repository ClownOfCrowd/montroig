import { ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export default function Reveal({ children, className = "" }: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}

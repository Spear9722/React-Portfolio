import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function Reveal({
  children,
  delay = 0,
}: RevealProps): React.ReactElement {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={elementRef}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
      }}
    >
      {children}
    </Box>
  );
}
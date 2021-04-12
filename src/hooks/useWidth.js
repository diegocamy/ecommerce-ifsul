import { useState, useEffect } from "react";

export const useWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      return window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return windowWidth;
};

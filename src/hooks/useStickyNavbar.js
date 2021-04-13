import { useState, useEffect } from "react";

export const useStickyNavbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    let lastnum = 0;

    document.addEventListener("scroll", (e) => {
      if (lastnum > window.pageYOffset) {
        lastnum = window.pageYOffset;
        setSticky(true);
      } else {
        lastnum = window.pageYOffset;
        setSticky(false);
      }
    });
  }, []);

  return sticky;
};

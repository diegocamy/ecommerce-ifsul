import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useRedirect = () => {
  const history = useHistory();
  const [count, setCount] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 1) {
        return history.push("/");
      }

      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return count;
};

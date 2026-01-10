import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useNavHandling() {
  const navigate = useNavigate();
  const location = useLocation();

  const pendingHash = useRef<string | null>(null);

  useEffect(() => {
    if (location.pathname === "/" && pendingHash.current) {
      const hash = pendingHash.current;
      pendingHash.current = null;

      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname]);

  const handleHashNavigation = (hash: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      pendingHash.current = hash;
      navigate("/");
    }
  };
  return { handleHashNavigation, pendingHash };
}

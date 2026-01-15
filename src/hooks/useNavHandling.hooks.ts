import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useNavHandling() {
  const navigate = useNavigate();
  const location = useLocation();

  const pendingHash = useRef<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return { handleHashNavigation, pendingHash, handleToHome, isScrolled };
}

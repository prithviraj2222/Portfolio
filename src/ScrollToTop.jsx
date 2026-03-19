import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.lenis?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
import { useEffect, useRef, useState } from "react";

const DeferredRender = ({ children, className = "" }) => {
  const markerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker || shouldRender) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" }
    );

    observer.observe(marker);
    return () => observer.disconnect();
  }, [shouldRender]);

  return <div ref={markerRef} className={className}>{shouldRender ? children : null}</div>;
};

export default DeferredRender;

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Defers rendering of `children` until the placeholder enters (or nears) the
 * viewport. Combined with `React.lazy`, this lets us avoid downloading +
 * mounting heavy below-the-fold sections until the user actually scrolls
 * towards them.
 */
export function LazyMount({
  children,
  fallback = null,
  rootMargin = "300px",
  minHeight = "60vh",
}: {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : fallback}
    </div>
  );
}

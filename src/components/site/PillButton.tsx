import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function PillButton({
  children,
  dark = false,
  className = "",
  href,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = `group rounded-full px-6 py-3.5 text-sm font-medium inline-flex items-center gap-3 transition-all ${
    dark ? "bg-foreground text-background hover:bg-foreground/90" : "bg-white text-foreground hover:bg-white/90"
  } ${className}`;
  const inner = (
    <>
      {children}
      <span className="w-7 h-7 bg-background text-foreground rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
        <ArrowUpRight className="w-3.5 h-3.5" />
      </span>
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

import type React from "react";

export const Mono = ({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["span"]): JSX.Element => {
  return (
    <span
      className={`font-mono text-sm text-slate-500 dark:text-zinc-300 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </span>
  );
};

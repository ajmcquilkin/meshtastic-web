import type React from "react";

export const Card = ({
  children,
  className,
  ...rest
}: JSX.IntrinsicElements["div"]): JSX.Element => {
  return (
    <div
      className={`flex overflow-hidden rounded-md bg-white dark:border-zinc-400 dark:bg-zinc-700 text-sm text-black dark:text-zinc-300 shadow-md ${className ?? ""
        }`}
      {...rest}
    >
      {children}
    </div>
  );
};

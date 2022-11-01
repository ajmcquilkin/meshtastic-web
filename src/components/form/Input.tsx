import type React from "react";
import { forwardRef, InputHTMLAttributes } from "react";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  prefix?: string;
  suffix?: string;
  action?: {
    icon: JSX.Element;
    action: () => void;
  };
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    description,
    prefix,
    suffix,
    action,
    error,
    disabled,
    ...rest
  }: InputProps,
  ref
) {
  return (
    <div>
      {/* Label */}
      <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300">{label}</label>
      {/*  */}
      <div className="relative flex rounded-md shadow-sm">
        {prefix && (
          <span className="inline-flex items-center rounded-l-md border-gray-300 text-stone-900 dark:text-stone-400 dark:border-zinc-600 bg-orange-200 dark:bg-stone-700 px-3 font-mono text-sm">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className={`flex h-10 w-full rounded-md border-transparent text-gray-900 dark:text-zinc-900 bg-orange-100 dark:bg-stone-500 px-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-stone-400 ${prefix ? "rounded-l-none" : ""
            } ${action ? "rounded-r-none" : ""} ${disabled ? "cursor-not-allowed bg-orange-50 dark:bg-stone-700 text-orange-200 dark:text-stone-700" : ""
            }`}
          disabled={disabled}
          step="any"
          {...rest}
        />
        {suffix && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 font-mono">
            <span className="text-gray-500 dark:text-zinc-400 sm:text-sm">{suffix}</span>
          </div>
        )}
        {action && (
          <button
            type="button"
            onClick={action.action}
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-orange-200 dark:bg-stone-600 px-4 py-2 text-sm font-medium hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {action.icon}
          </button>
        )}
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500 dark:text-red-800" />
          </div>
        )}
      </div>
      {description && (
        <p className="mt-2 text-sm text-gray-500 dark:text-zinc-600">{description}</p>
      )}
      {error && <p className="mt-2 text-sm text-red-600 dark:text-red-800">{error}</p>}
    </div>
  );
});

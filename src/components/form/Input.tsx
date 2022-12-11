import type React from "react";
import { forwardRef, InputHTMLAttributes } from "react";

import { InfoWrapper, InfoWrapperProps } from "@components/form/InfoWrapper.js";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<InfoWrapperProps, "children"> {
  prefix?: string;
  suffix?: string;
  action?: {
    icon: JSX.Element;
    action: () => void;
  };
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
    <InfoWrapper label={label} description={description} error={error}>
      <div className="relative flex rounded-md shadow-sm">
        {prefix && (
          <span className="inline-flex items-center rounded-l-md border-gray-300 bg-orange-200 px-3 font-mono text-sm">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className={`flex h-10 w-full rounded-md border-transparent bg-orange-100 px-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 ${
            prefix ? "rounded-l-none" : ""
          } ${action ? "rounded-r-none" : ""} ${
            disabled ? "cursor-not-allowed bg-orange-50 text-orange-200" : ""
          }`}
          disabled={disabled}
          step="any"
          {...rest}
        />
        {suffix && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 font-mono">
            <span className="text-gray-500 sm:text-sm">{suffix}</span>
          </div>
        )}
        {action && (
          <button
            type="button"
            onClick={action.action}
            className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md bg-orange-200 px-4 py-2 text-sm font-medium text-orange-700 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {action.icon}
          </button>
        )}
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
          </div>
        )}
      </div>
    </InfoWrapper>
  );
});

"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, disabled, value, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(!!value);

    // Types that always show content (date, time, etc.)
    const alwaysShowLabel = [
      "date",
      "time",
      "datetime-local",
      "month",
      "week",
    ].includes(type || "");

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    };

    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "peer w-full rounded-lg border border-input bg-background px-4 pt-6 pb-2 text-sm transition-all duration-200",
            "placeholder-transparent",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 focus:border-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus:ring-destructive",
            className
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={label || ""}
          disabled={disabled}
          value={value}
          {...props}
        />
        {label && (
          <label
            className={cn(
              "absolute left-4 transition-all duration-200 pointer-events-none",
              "text-muted-foreground",
              isFocused || hasValue || alwaysShowLabel || disabled
                ? "top-1.5 text-xs font-medium"
                : "top-4 text-sm",
              isFocused && "text-ring",
              error && "text-destructive"
            )}
          >
            {label}
          </label>
        )}
        {error && (
          <p className="mt-1.5 text-xs text-destructive animate-in fade-in slide-in-from-top-1 duration-200">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

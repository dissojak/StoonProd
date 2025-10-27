import { Eye, EyeOff } from "lucide-react";
import React from "react";

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showToggle?: boolean;
  readonly showValue?: boolean;
  onToggle?: () => void;
  placeholder?: string;
};

export default function FormField({
  id,
  label,
  type = "text",
  icon,
  value,
  onChange,
  showToggle,
  showValue,
  onToggle,
  placeholder,
}: FieldProps) {
  const getInputType = () => {
    if (!showToggle) return type;
    return showValue ? "text" : "password";
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-zinc-300" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-zinc-400">{icon}</span>
        <input
          id={id}
          type={getInputType()}
          className={`w-full rounded-md border border-zinc-700 bg-zinc-800/80 ${
            showToggle ? "pl-10 pr-10" : "pl-10 pr-3"
          } py-2 text-white placeholder-zinc-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute inset-y-0 right-2 flex items-center rounded p-1 text-zinc-400 hover:text-zinc-200"
            aria-label={showValue ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`}
          >
            {showValue ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
      </div>
    </div>
  );
}

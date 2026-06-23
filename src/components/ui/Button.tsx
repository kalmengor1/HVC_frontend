import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-semibold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] text-sm cursor-pointer flex items-center justify-center";

  const variants = {
    primary: "bg-[#4fa8e2] hover:bg-[#3a7fb0] text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    outline:
      "bg-transparent border border-gray-300 hover:border-gray-400 text-gray-700 shadow-none hover:shadow-none",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto px-6";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

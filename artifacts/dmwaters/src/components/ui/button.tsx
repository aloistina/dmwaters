import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "accent" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    
    const variants = {
      default: "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25 hover:bg-secondary/90",
      accent: "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90",
      outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/5",
      ghost: "bg-transparent text-foreground hover:bg-muted",
      link: "text-primary underline-offset-4 hover:underline bg-transparent"
    };

    const sizes = {
      default: "h-12 px-6 py-3",
      sm: "h-9 rounded-md px-4 text-sm",
      lg: "h-14 rounded-xl px-8 text-lg font-semibold",
      icon: "h-12 w-12",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={variant !== "link" && variant !== "ghost" ? { y: -2 } : {}}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...(props as HTMLMotionProps<"button">)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

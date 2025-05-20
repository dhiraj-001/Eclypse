import React from "react";

const shapes = {
  round: "rounded-lg",
} as const;

const variants = {
  outline: {
    blue_gray_800: "border-blue_gray-800 border border-solid text-blue_gray-800",
    gray_500: "border-gray-500 border border-solid text-gray-500",
  },
  fill: {
    blue_gray_800: "bg-blue_gray-800 text-white-a700",
    black_900: "bg-white text-black",
    buy_button: "bg-white !text-black hover:bg-red-500 hover:text-white transition-colors",
  },
} as const;

const sizes = {
  sm: "h-[52px] px-8 text-[16px]",
  xs: "h-[50px] px-8 text-[29px]",
  md: "h-[66px] px-4 text-[19px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "black-900",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "blue_gray_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-[25px] font-medium rounded-lg lg:text-[18px] ${shape && shapes[shape]
        } ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]
        }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
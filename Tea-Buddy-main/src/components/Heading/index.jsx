import React from "react";

const sizes = {
  "3xl": "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  "2xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  xl: "text-2xl font-bold md:text-[22px]",
  "4xl": "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  s: "text-[13px] font-bold",
  md: "text-lg font-bold leading-[25px]",
  xs: "text-xs font-semibold",
  lg: "text-xl font-bold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

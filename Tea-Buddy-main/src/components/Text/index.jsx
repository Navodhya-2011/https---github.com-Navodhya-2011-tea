import React from "react";

const sizes = {
  xs: "text-xs font-thin",
  lg: "text-[15px] font-medium",
  s: "text-[13px] font-normal",
  "2xl": "text-xl font-normal",
  xl: "text-base font-medium leading-5",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-spartan ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

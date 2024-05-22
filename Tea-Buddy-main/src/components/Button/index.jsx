import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  fill: {
    teal_600_c6: "bg-teal-600_c6 text-white-A700_cc",
    teal_600_d3: "bg-teal-600_d3 text-white-A700_cc",
    gray_300: "bg-gray-300",
    teal_600_e5: "bg-teal-600_e5 shadow-xs text-white-A700",
  },
};
const sizes = {
  md: "h-[45px] px-[35px] text-[15px]",
  xs: "h-[31px] px-[5px]",
  sm: "h-[32px] px-[17px] text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "sm",
  color = "teal_600_e5",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["teal_600_c6", "teal_600_d3", "gray_300", "teal_600_e5"]),
};

export { Button };

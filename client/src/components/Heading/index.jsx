import React from "react";

const sizes = {};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

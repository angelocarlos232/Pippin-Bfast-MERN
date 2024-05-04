import React from "react";

const sizes = {};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-300_01 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

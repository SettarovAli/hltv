import React from "react";
import ReactCountryFlag from "react-country-flag";

const Flag = ({
  code,
  title,
  width = "18px",
  height = "12px",
  marginRight = "5px",
  opacity = "1",
}) => {
  return (
    <ReactCountryFlag
      countryCode={code}
      svg
      style={{
        width,
        height,
        marginRight,
        opacity,
      }}
      title={title}
    />
  );
};

export default Flag;

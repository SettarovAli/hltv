import React from "react";
import ReactCountryFlag from "react-country-flag";

const Flag = ({ code, title }) => {
  return (
    <ReactCountryFlag
      countryCode={code}
      svg
      style={{
        width: "18px",
        height: "12px",
        marginRight: "5px",
      }}
      title={title}
    />
  );
};

export default Flag;

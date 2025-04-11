import React from "react";

const WebSite = () => {
  const styleObj = () => {
    return {
      color: "green",
      fontSize: "3rem",
      textAlign: "center",
    };
  };

  return <div style={styleObj()}>WebSite</div>;
};

export default WebSite;



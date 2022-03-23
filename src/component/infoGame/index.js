import React from "react";

const InfoGame = ({ title, url }) => {
  return (
    <div className="infoGame">
      <h3>{title}</h3>
      <img src={url} />
    </div>
  );
};

export default InfoGame;

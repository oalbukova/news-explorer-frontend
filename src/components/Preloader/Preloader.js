import React from "react";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader" />
      <span className="preloader__text">Идет поиск новостей...</span>
    </div>
  );
}

export default Preloader;

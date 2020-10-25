import React from "react";
import './Preloader.css';

function Preloader() {

  return (
    <section className='preloader'>
      <div className="circle-preloader"></div>
      <span className='preloader__text'>Идет поиск новостей...</span>
    </section>
  );
}

export default Preloader;

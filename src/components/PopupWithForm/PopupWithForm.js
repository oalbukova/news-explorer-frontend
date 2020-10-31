import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  return (
    <section className={(props.isOpen ? "popup popup_opened" : "popup")} id={props.name}>
      <form className={`popup__container popup__container_type_${props.formName}`} name={props.name} method="post" action="#" onSubmit={props.onSubmit}>
        <button onClick={props.onClose} className="popup__button-close" type="reset"></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
      </form>
    </section>
  );
}

export default PopupWithForm;

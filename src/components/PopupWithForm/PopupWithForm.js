import React from "react";
import "./PopupWithForm.css";

function PopupWithForm(props) {
  const { isOpen, name, onSubmit, onClose, title, children } = props;

  return (
    <section className={isOpen ? "popup popup_opened" : "popup"}>
      <form
        className={`popup__container popup__container_type_${props.name}`}
        name={name}
        method="post"
        action="#"
        onSubmit={onSubmit}
      >
        <button
          onClick={onClose}
          className="popup__button-close"
          type="reset"
        />
        <h2 className={`popup__title popup__title_type_${name}`}>{title}</h2>
        {children}
      </form>
    </section>
  );
}

export default PopupWithForm;

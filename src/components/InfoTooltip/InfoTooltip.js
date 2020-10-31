import React from "react";


function InfoTooltip(props) {
  const { isOpen, onClose, successStyle } = props;

  return (
    <section
      className={isOpen ? "popup popup_opened" : "popup"}
      id="InfoTooltip"
    >
      <form className="popup__container popup__container_type_login">
        <button
          onClick={onClose}
          className="button-close button-close_login"
          id="formError-close"
          type="button"
        />
        <h2 className="popup__title popup__title_type_login">
          {successStyle
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </form>
    </section>
  );
}

export default InfoTooltip;

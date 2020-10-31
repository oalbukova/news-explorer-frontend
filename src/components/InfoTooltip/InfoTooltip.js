import React from "react";

import PopupWithForm from "../PopupWithForm/PopupWithForm";

function InfoTooltip(props) {
  const { isOpen, onClose, changePopup } = props;

  return (
    <PopupWithForm
      name="tooltip"
      title="Пользователь успешно зарегистрирован!"
      isOpen={isOpen}
      onClose={onClose}
      changePopup={changePopup}
    >
      <span
        className="popup__span-registration popup__span-registration_blue popup__span-registration_tooltip"
        onClick={changePopup}
      >
        Войти
      </span>
    </PopupWithForm>
  );
}

export default InfoTooltip;

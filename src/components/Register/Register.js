import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Register(props) {
  const { changePopup, changePopupToInfoTooltip, isOpen, onClose } = props;
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const nameRef = React.useRef();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [registerEmailError, setRegisterEmailError] = React.useState("");
  const [registerPasswordError, setRegisterPasswordError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [emailValid, setEmailValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [nameValid, setNameValid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  function validate() {
    setRegisterEmailError(emailRef.current.validationMessage);
    setRegisterPasswordError(passwordRef.current.validationMessage);
    setNameError(nameRef.current.validationMessage);

    !emailRef.current.validity.valid
      ? setEmailValid(false)
      : setEmailValid(true);
    !passwordRef.current.validity.valid
      ? setPasswordValid(false)
      : setPasswordValid(true);
    !nameRef.current.validity.valid ? setNameValid(false) : setNameValid(true);
  }

  React.useEffect(() => {
    setDisabled(true);
    setName("");
    setEmail("");
    setPassword("");
    setRegisterEmailError("");
    setRegisterPasswordError("");
    setNameError("");
  }, [isOpen]);

  React.useEffect(() => {
    emailValid && passwordValid && nameValid
      ? setDisabled(false)
      : setDisabled(true);
  }, [emailValid, passwordValid, nameValid, email, password, name]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    validate();
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    validate();
  }

  function handleChangeName(e) {
    setName(e.target.value);
    validate();
  }

  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      isOpen={isOpen}
      onClose={onClose}
      disabled={disabled}
      changePopup={changePopup}
    >
      <span className="popup__input-name" lang="en">
        Email
      </span>
      <input
        className="popup__input"
        id="email-register"
        name="email"
        type="email"
        value={email || ""}
        ref={emailRef}
        onChange={handleChangeEmail}
        placeholder="Введите почту"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        minLength="4"
        maxLength="40"
      />
      <span
        className={`popup__span-error ${
          !emailValid && "popup__span-error_type_active "
        }`}
        id="email-input-error-register"
      >
        {registerEmailError}
      </span>
      <span className="popup__input-name">Пароль</span>
      <input
        id="password-register"
        name="password"
        type="password"
        value={password || ""}
        ref={passwordRef}
        onChange={handleChangePassword}
        className="popup__input"
        required
        placeholder="Введите пароль"
        minLength="8"
      />
      <span
        className={`popup__span-error ${
          !passwordValid && "popup__span-error_type_active"
        }`}
        id="password-input-error"
      >
        {registerPasswordError}
      </span>
      <span className="popup__input-name">Имя</span>
      <input
        className="popup__input"
        id="name-input-register"
        type="text"
        required
        placeholder="Введите своё имя"
        value={name || ""}
        ref={nameRef}
        name="name"
        pattern="[A-Za-zА-Яа-яЁё -]*"
        minLength="2"
        maxLength="40"
        onChange={handleChangeName}
      />
      <span
        className={`popup__span-error ${
          !nameValid && "popup__span-error_type_active"
        }`}
        id="name-input-error-register"
      >
        {nameError}
      </span>
      <span className="popup__registration-err">
        Такой пользователь уже есть
      </span>
      <button
        className={
          !disabled
            ? "popup__button-save"
            : "popup__button-save popup__button-save_type_disabled"
        }
        type="submit"
        disabled={props.disabled}
        onClick={changePopupToInfoTooltip}
      >
        Зарегистрироваться
      </button>
      <p className="popup__span-registration">
        или{" "}
        <span
          className="popup__span-registration popup__span-registration_blue"
          onClick={changePopup}
        >
          Войти
        </span>
      </p>
    </PopupWithForm>
  );
}

export default Register;

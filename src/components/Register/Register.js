import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Register(props) {
  const { changePopup, isOpen, onClose, handleRegister, registrationErr, setRegistrationErr, isLoading } = props;
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

  function validateEmail() {
    setRegisterEmailError(emailRef.current.validationMessage);
    !emailRef.current.validity.valid
      ? setEmailValid(false)
      : setEmailValid(true);
  }

  function validatePassword() {
    setRegisterPasswordError(passwordRef.current.validationMessage);
    !passwordRef.current.validity.valid
      ? setPasswordValid(false)
      : setPasswordValid(true);
  }

  function validateName() {
    setNameError(nameRef.current.validationMessage);
    !nameRef.current.validity.valid ? setNameValid(false) : setNameValid(true);
  }


  React.useEffect(() => {
    setDisabled(true)
    setName("");
    setEmail("");
    setPassword("");
    setRegisterEmailError("");
    setRegisterPasswordError("");
    setNameError("");
    setRegistrationErr("");
  }, [isOpen]);

  React.useEffect(() => {
    setDisabled(true);
  }, [isLoading]);



  React.useEffect(() => {
    emailValid && passwordValid && nameValid
      ? setDisabled(false)
      : setDisabled(true);
  }, [emailValid, passwordValid, nameValid, email, password, name]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    validateEmail();
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    validatePassword();
  }

  function handleChangeName(e) {
    setName(e.target.value);
    validateName();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ email, password, name })
  };

  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      isOpen={isOpen}
      onClose={onClose}
      disabled={disabled}
      changePopup={changePopup}
      onSubmit={handleSubmit}
    //  isLoading={isLoading}
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
        disabled={props.disabled}
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
        disabled={props.disabled}
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
        disabled={props.disabled}
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
        {registrationErr}
      </span>
      <button
        className={
          !disabled
            ? "popup__button-save"
            : "popup__button-save popup__button-save_type_disabled"
        }
        type="submit"
        disabled={props.disabled}
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

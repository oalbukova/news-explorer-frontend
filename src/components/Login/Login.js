import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login(props) {
  const { changePopup, isOpen, onClose } = props;
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginEmailError, setLoginEmailError] = React.useState("");
  const [loginPasswordError, setLoginPasswordError] = React.useState("");
  const [emailValid, setEmailValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  function validate() {
    setLoginEmailError(emailRef.current.validationMessage);
    setLoginPasswordError(passwordRef.current.validationMessage);

    !emailRef.current.validity.valid
      ? setEmailValid(false)
      : setEmailValid(true);
    !passwordRef.current.validity.valid
      ? setPasswordValid(false)
      : setPasswordValid(true);
  }

  React.useEffect(() => {
    setDisabled(false);
    setEmail("");
    setPassword("");
    setLoginEmailError("");
    setLoginPasswordError("");
  }, [isOpen]);

  React.useEffect(() => {
    emailValid && passwordValid ? setDisabled(false) : setDisabled(true);
  }, [emailValid, passwordValid, email, password]);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    validate();
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    validate();
  }

  return (
    <PopupWithForm
      name="login"
      title="Вход"
      isOpen={isOpen}
      onClose={onClose}
      disabled={disabled}
    >
      <span className="popup__input-name" lang="en">
        Email
      </span>
      <input
        className="popup__input"
        required
        id="email-login"
        name="email"
        type="email"
        placeholder="Введите почту"
        value={email || ""}
        ref={emailRef}
        onChange={handleChangeEmail}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        minLength="4"
        maxLength="40"
      />
      <span
        className={`popup__span-error ${
          !emailValid && "popup__span-error_type_active "
        }`}
        id="email-input-error-login"
      >
        {loginEmailError}
      </span>
      <span className="popup__input-name">Пароль</span>
      <input
        className="popup__input"
        required
        id="password-login"
        name="password"
        type="password"
        placeholder="Введите пароль"
        minLength="8"
        value={password || ""}
        ref={passwordRef}
        onChange={handleChangePassword}
      />
      <span
        className={`popup__span-error ${
          !passwordValid && "popup__span-error_type_active"
        }`}
        id="password-input-error-login"
      >
        {loginPasswordError}
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
        Войти
      </button>
      <p className="popup__span-registration">
        или{" "}
        <span
          className="popup__span-registration popup__span-registration_blue"
          onClick={changePopup}
        >
          Зарегистрироваться
        </span>
      </p>
    </PopupWithForm>
  );
}

export default Login;

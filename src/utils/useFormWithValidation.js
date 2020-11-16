import React, { useCallback, useState } from "react";

export const useFormWithValidation = () => {
  const [value, setValue] = useState({});
  const [errMsg, setErrMsg] = useState({});
  const [isValid, setIsValid] = useState(false);
  const onChange = useCallback((evt) => {
    setValue(evt.target.value);
    setErrMsg(evt.target.validationMessage);
    setIsValid(evt.target.validity.valid);
  }, []);
  return { value, setValue, errMsg, setErrMsg, isValid, setIsValid, onChange };
};

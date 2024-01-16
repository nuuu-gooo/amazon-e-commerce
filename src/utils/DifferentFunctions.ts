export const nameValidation = (
  nameValue: string,
  setNameError: (error: boolean) => void
): void => {
  if (nameValue === "") {
    setNameError(true);
  } else {
    setNameError(false);
  }
};

export const emailValidation = (
  emailValue: string,
  setEmailError: (error: boolean) => void
): void => {
  if (!emailValue.includes("@")) {
    setEmailError(true);
  } else {
    setEmailError(false);
  }
};

export const passwordValidation = (
  passwordValue: string,
  setPasswordError: (error: boolean) => void
): void => {
  if (passwordValue.length < 7) {
    setPasswordError(true);
  } else {
    setPasswordError(false);
  }
};

export const passwordReEnterValidation = (
  passwordReEnterValue: string,
  passwordValue: string,
  setPasswordReEnterError: (error: boolean) => void
): void => {
  if (passwordReEnterValue !== passwordValue) {
    setPasswordReEnterError(true);
  } else {
    setPasswordReEnterError(false);
  }
};

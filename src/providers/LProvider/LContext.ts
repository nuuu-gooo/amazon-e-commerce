import { createContext } from "react";

export enum Locale_ENUM {
  DE = "de",
  EN = "en",
}
export interface LContextTypes {
  locale: Locale_ENUM;
  setLocale: React.Dispatch<React.SetStateAction<Locale_ENUM>>;
  toggleLanguage: () => void;
}

export const LContext = createContext<LContextTypes>({
  locale: Locale_ENUM.EN,
  setLocale: () => {},
  toggleLanguage: () => {},
});

import { useCallback, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { PropsWithChildren, useState } from "react";
import { LContext, Locale_ENUM } from "./LContext";
import en from "@src/features/ChangeLanguage/languages/en.json";
import de from "@src/features/ChangeLanguage/languages/de.json";

export const LContextProvider = ({ children }: PropsWithChildren) => {
  const [locale, setLocale] = useState<Locale_ENUM>(Locale_ENUM.EN);

  const languages = { de, en };

  const toggleLanguage = useCallback(() => {
    if (locale === Locale_ENUM.EN) {
      setLocale(Locale_ENUM.DE);
      localStorage.setItem("language", Locale_ENUM.DE);
    } else if (locale === Locale_ENUM.DE) {
      setLocale(Locale_ENUM.EN);
      localStorage.setItem("language", Locale_ENUM.EN);
    }
  }, [locale]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLocale(storedLanguage as Locale_ENUM);
    }
  }, []);

  console.log(locale);

  return (
    <LContext.Provider value={{ locale, setLocale, toggleLanguage }}>
      <IntlProvider
        defaultLocale="en"
        locale={locale}
        messages={languages[locale]}
      >
        {children}
      </IntlProvider>
    </LContext.Provider>
  );
};

import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./GlobalProvider";
import { LContextProvider } from "./LProvider/LContextProvider";

type ProvidersProps = {};

export function Providers({ children }: PropsWithChildren<ProvidersProps>) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <LContextProvider>{children}</LContextProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}

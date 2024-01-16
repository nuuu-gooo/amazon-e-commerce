import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./GlobalProvider";
import { LContextProvider } from "./LProvider/LContextProvider";
import { AuthProvider } from "./Auth/AuthProvider";

type ProvidersProps = {};

export function Providers({ children }: PropsWithChildren<ProvidersProps>) {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalProvider>
          <LContextProvider>{children}</LContextProvider>
        </GlobalProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

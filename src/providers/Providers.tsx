import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./GlobalProvider";
import { LContextProvider } from "./LProvider/LContextProvider";
import { AuthProvider } from "./Auth/AuthProvider";

type ProvidersProps = {};

export function Providers({ children }: PropsWithChildren<ProvidersProps>) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalProvider>
          <LContextProvider>{children}</LContextProvider>
        </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

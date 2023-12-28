import { PropsWithChildren, useState } from "react";

import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState<number>(0);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggleSidebarFunction = () => {
    setIsToggled(!isToggled);
  };
  return (
    <GlobalContext.Provider
      value={{
        count,
        setCount,
        isToggled,
        setIsToggled,
        toggleSidebarFunction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

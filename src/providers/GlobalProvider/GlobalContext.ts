import { createContext } from "react";
interface TGlobalContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebarFunction: () => void;
}

export const GlobalContext = createContext<TGlobalContext>({
  count: 0,
  setCount: () => {},
  isToggled: false,
  setIsToggled: () => {},
  toggleSidebarFunction: () => {},
});

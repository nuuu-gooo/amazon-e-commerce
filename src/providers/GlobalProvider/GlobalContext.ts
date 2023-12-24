import { createContext } from "react";
// import { TCategoryList } from "./GlobalProvider";
// import { TNav2Links } from "./GlobalProvider";
// import { TFooter1Links } from "./GlobalProvider";
// import { TAmazonServices } from "./GlobalProvider";

interface TGlobalContext {
  // categoryList: TCategoryList[];
  // nav2Links: TNav2Links[];
  // footerLinks: TFooter1Links[];
  // amazonServices: TAmazonServices[];
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  // categoryList: [],
  // nav2Links: [],
  // footerLinks: [],
  // amazonServices: [],
  count: 0,
  setCount: () => {},
});

import { PropsWithChildren, useState } from "react";

import { GlobalContext } from "./GlobalContext";

// export interface TCategoryList {
//   name: string;
//   id: number;
// }
// export interface TNav2Links {
//   name: string;
//   id: number;
//   link: string;
// }

// export interface TFooter1LinksArrays {
//   name: string;
//   link: string;
// }
// export interface TFooter1Links {
//   category: string;
//   links: TFooter1LinksArrays[];
// }

// export interface TAmazonServices {
//   name: string;
//   description: string;
// }

export function GlobalProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState<number>(0);
  return (
    <GlobalContext.Provider
      // value={{ categoryList, nav2Links, footerLinks, amazonServices }}
      value={{ count, setCount }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

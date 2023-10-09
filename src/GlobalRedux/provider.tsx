"use client";
// All of this normally would go at the index level but use client for Nextjs needs a workaround, so we'll make a substitute Provider page and pass it as "PROVIDERS". Perhaps they'll fix this soon?
import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}

import { useContext } from "react";
import { SearchContextProvider } from "../SearchContext";

export const useSearchContext = () => {
  const context = useContext(SearchContextProvider);

  if (!context)
    throw new Error("You need to use the context inside the provider");

  return context;
};

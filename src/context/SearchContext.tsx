import { createContext, useState } from "react";

interface SearchType {
  searchedValues: string[];
  setSearchedValues: React.Dispatch<React.SetStateAction<string[]>>;
  handleAddSearchValue: (value: string) => void;
}

export const SearchContextProvider = createContext<SearchType | undefined>(
  undefined
);

const SearchContext = ({ children }: { children: React.ReactNode }) => {
  const [searchedValues, setSearchedValues] = useState<string[]>([]);

  const handleAddSearchValue = (newValue: string) => {
    setSearchedValues((prevValues) => [...(prevValues ?? []), newValue]);
  };

  const values = {
    searchedValues,
    setSearchedValues,
    handleAddSearchValue,
  };

  return (
    <SearchContextProvider.Provider value={values}>
      {children}
    </SearchContextProvider.Provider>
  );
};

export default SearchContext;

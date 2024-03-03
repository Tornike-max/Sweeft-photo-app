import { createContext, useState, useEffect } from "react";

interface SearchType {
  searchedValues: { value: string; id: number }[];
  setSearchedValues: React.Dispatch<
    React.SetStateAction<{ value: string; id: number }[]>
  >;
  handleAddSearchValue: (value: string) => void;
}

export const SearchContextProvider = createContext<SearchType | undefined>(
  undefined
);

const SearchContext = ({ children }: { children: React.ReactNode }) => {
  const [searchedValues, setSearchedValues] = useState<
    { value: string; id: number }[]
  >([]);

  useEffect(() => {
    const savedData = localStorage.getItem("searchedValues");

    if (savedData && JSON.parse(savedData)?.length >= 10) {
      localStorage.removeItem("searchedValues");
    }
    if (savedData) {
      setSearchedValues(JSON.parse(savedData));
    }
  }, []);

  const handleAddSearchValue = (newValue: string) => {
    if (searchedValues.find((val) => val.value === newValue)) return;
    const newSearchValue = { value: newValue, id: Date.now() };
    setSearchedValues((prevValues) => [...prevValues, newSearchValue]);
    localStorage.setItem(
      "searchedValues",
      JSON.stringify([...searchedValues, newSearchValue])
    );
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

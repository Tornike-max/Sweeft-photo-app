import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";
import { useSearchContext } from "../context/contextHook/useSearchContext";

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const debouncedQuery = useDebounce(query, 700);
  const { handleAddSearchValue } = useSearchContext();

  useEffect(() => {
    if (debouncedQuery === "") return;
    searchParams.set("search", debouncedQuery);
    setSearchParams(searchParams);
    handleAddSearchValue(debouncedQuery);
  }, [debouncedQuery]);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim() === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="max-w-sm w-full flex items-center relative">
      <input
        type="search"
        placeholder="Search"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        aria-label="Search input"
      />
    </div>
  );
}

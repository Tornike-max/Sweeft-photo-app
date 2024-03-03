import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { SearchedValue } from "../../types/types";

const SearchedValues = ({
  searchedValues,
}: {
  searchedValues: SearchedValue[];
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  const handleSearchTermClick = (e: React.MouseEvent, val: string) => {
    e.preventDefault();
    searchParams.set("search", val);
    setSearchParams(searchParams);
  };
  return (
    <div className="m-auto max-w-2xl w-full h-36 overflow-y-auto flex flex-wrap justify-center items-center gap-4 py-3 px-4 rounded-md bg-gray-100 shadow-md">
      {searchedValues.length > 0 ? (
        searchedValues.map((val) => (
          <button
            key={val.id}
            onClick={(e) => handleSearchTermClick(e, val.value)}
            className={`py-2 px-3 rounded-lg border-[1px] border-indigo-500 ${
              pathname?.slice(1) === val?.value
                ? "bg-indigo-500 text-white"
                : "bg-none"
            }`}
          >
            {val.value}
          </button>
        ))
      ) : (
        <p className="text-lg text-gray-600 font-semibold">No Search Values!</p>
      )}
    </div>
  );
};

export default SearchedValues;

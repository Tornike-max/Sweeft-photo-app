import React from "react";
import { useSearchParams } from "react-router-dom";
import { SearchedValue } from "../../types/types";

export default function SearchedValues({
  searchedValues,
}: {
  searchedValues: SearchedValue[];
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchTermClick = (e: React.MouseEvent, val: string) => {
    e.preventDefault();
    searchParams.set("search", val);
    setSearchParams(searchParams);
  };

  return (
    <div className="m-auto max-w-2xl w-full h-auto flex justify-center items-center flex-wrap gap-2 bg-slate-200 py-3 px-4 rounded-md">
      {searchedValues.length > 0 ? (
        searchedValues.map((val) => (
          <button
            onClick={(e) => handleSearchTermClick(e, val.value)}
            key={val.id}
            className="rounded-lg bg-white py-2 px-4 shadow-md hover:shadow-xl duration-150 transition-all cursor-pointer text-indigo-600"
          >
            {val.value}
          </button>
        ))
      ) : (
        <div className="w-full flex justify-center items-center">
          <p className="text-lg text-gray-600 font-semibold">
            No Search Values!
          </p>
        </div>
      )}
    </div>
  );
}

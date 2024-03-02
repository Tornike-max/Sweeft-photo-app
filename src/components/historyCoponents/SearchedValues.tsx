import React from "react";
import { useSearchContext } from "../../context/contextHook/useSearchContext";
import { useSearchParams } from "react-router-dom";

export default function SearchedValues() {
  const { searchedValues } = useSearchContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearchTermClick = (e: React.MouseEvent, val: string) => {
    e.preventDefault();
    searchParams.set("search", val);
    setSearchParams(searchParams);
  };
  return (
    <div className="m-auto max-w-3xl w-full h-52 flex justify-center items-center gap-2 bg-slate-200 rounded-lg px-4 py-2 ">
      {searchedValues.length > 0 ? (
        searchedValues.map((val) => (
          <button
            onClick={(e) => handleSearchTermClick(e, val)}
            key={val}
            className="my-4 rounded-lg bg-slate-100 py-2 px-3  shadow-md hover:shadow-xl duration-150 transition-all cursor-pointer"
          >
            <span className="text-lg font-semibold text-indigo-500 ">
              {val}
            </span>
          </button>
        ))
      ) : (
        <div className="w-full flex justify-center items-center ">
          <p className="text-xl sm:text-2xl text-red-500 font-semibold">
            No Search Values!
          </p>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="max-w-sm w-full flex items-center">
      <input
        type="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
}

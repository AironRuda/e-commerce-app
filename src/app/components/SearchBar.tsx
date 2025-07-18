"use client";

import Image from "next/image";
import { useState } from "react";

const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (search: string) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={`search-bar w-full md:w-2/3 hover:outline-2 hover:outline-gray-500 ${
        isFocused ? "outline-2 outline-gray-500" : ""
      }`}
    >
      <div className="flex justify-between">
        <input
          className="md:text-lg md:pl-5"
          type="text"
          placeholder="Introduce una palabra clave..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Image
          className="mr-5"
          src="/search-icon.svg"
          alt="search-icon"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default SearchBar;

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
      className={`search-bar w-full md:w-3/4  ${
        isFocused ? "outline-2 outline-gray-500" : ""
      }`}
    >
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Introduce el id de un producto ..."
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

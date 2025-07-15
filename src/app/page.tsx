"use client";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import FilterByCollection from "./components/FilterByCollection";
import ProductsTable from "./components/ProductsTable";
import ProductsById from "./components/ProductsById";
import ProductsByCollection from "./components/ProductsByCollection";
import { useDebounce } from "./hooks/useDebounce";
import Image from "next/image";

export default function Home() {
  const [search, setSearch] = useState("");
  const [collectionFilter, setCollectionFilter] = useState("");

  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    if (search) {
      setCollectionFilter("");
    }
  }, [search]);

  useEffect(() => {
    if (collectionFilter) {
      setSearch("");
    }
  }, [collectionFilter]);

  return (
    <article className="w-full p-5">
      <header className="w-full pt-10 md:pt-0">
        <p className="text-xl font-bold text-start md:text-center md:text-3xl md:font-extrabold">
          ¿Qué es lo que estás <br className="md:hidden" /> buscando?
        </p>
      </header>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterByCollection
        collectionFilter={collectionFilter}
        setCollectionFilter={setCollectionFilter}
      />
      <header className="flex justify-between md:justify-start pt-3 mb-3">
        <div className="flex items-center">
          <p className="text-md font-semibold md:text-lg md:font-extrabold">
            Top ventas
          </p>
          <Image
            src="/chevron-down-icon.svg"
            alt="chevron-down"
            width={20}
            height={20}
          />
        </div>
        <div className="flex items-center md:pl-8">
          <p className="text-md font-semibold md:text-lg md:font-extrabold text-gray-500">
            Explorar
          </p>
          <Image
            style={{ transform: "rotate(270deg)" }}
            src="/chevron-down-icon.svg"
            alt="chevron-down"
            width={20}
            height={20}
          />
        </div>
      </header>
      {search && <ProductsById productId={debouncedSearch} />}
      {collectionFilter && (
        <ProductsByCollection collection={collectionFilter} />
      )}
      {!search && !collectionFilter && <ProductsTable />}
    </article>
  );
}

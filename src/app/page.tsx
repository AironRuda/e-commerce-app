"use client";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import FilterByCollection from "./components/FilterByCollection";
import ProductsTable from "./components/ProductsTable";
import ProductsById from "./components/ProductsById";
import ProductsByCollection from "./components/ProductsByCollection";
import { useDebounce } from "./hooks/useDebounce";

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
    <article className="w-full p-8">
      <header className="w-full pt-18 md:pt-0">
        <p className="text-3xl font-extrabold text-start md:text-center">
          ¿Qué es lo que estás buscando?
        </p>
      </header>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterByCollection
        collectionFilter={collectionFilter}
        setCollectionFilter={setCollectionFilter}
      />
      {search && <ProductsById productId={debouncedSearch} />}
      {collectionFilter && (
        <ProductsByCollection collection={collectionFilter} />
      )}
      {!search && !collectionFilter && <ProductsTable />}
    </article>
  );
}

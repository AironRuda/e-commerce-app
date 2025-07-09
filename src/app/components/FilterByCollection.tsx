"use client";

const FilterByCollection = ({
  collectionFilter,
  setCollectionFilter,
}: {
  collectionFilter: string;
  setCollectionFilter: (collectionFilter: string) => void;
}) => {
  const collectionFilterOptions = [
    { name: "🎮  Tecnología", collectionId: "electronics" },
    { name: "💎  Joyería", collectionId: "jewelery" },
    { name: "👗  Ropa Femenina", collectionId: "men's clothing" },
    { name: "👚  Ropa Masculina", collectionId: "women's clothing" },
  ];

  const handleCollectionFilter = (collectionId: string) => {
    if (collectionFilter === collectionId) {
      setCollectionFilter("");
    } else {
      setCollectionFilter(collectionId);
    }
  };

  return (
    <section className="flex flex-col gap-4 mt-4 ">
      <h1 className="text-2xl font-bold">Categorías</h1>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {collectionFilterOptions.map((option) => (
          <li
            key={option.collectionId}
            className="flex items-center w-full justify-center md:col-span-1"
          >
            <button
              className={`filter-by-collection-option ${
                collectionFilter === option.collectionId ? "bg-white" : ""
              }`}
              onClick={() => handleCollectionFilter(option.collectionId)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterByCollection;

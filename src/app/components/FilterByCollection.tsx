"use client";

const FilterByCollection = ({
  collectionFilter,
  setCollectionFilter,
}: {
  collectionFilter: string;
  setCollectionFilter: (collectionFilter: string) => void;
}) => {
  const collectionFilterOptions = [
    { icon: "🎮", name: "Tecnología", collectionId: "electronics" },
    { icon: "💎", name: "Joyería", collectionId: "jewelery" },
    { icon: "👗", name: "Ropa Femenina", collectionId: "men's clothing" },
    { icon: "👚", name: "Ropa Masculina", collectionId: "women's clothing" },
  ];

  const handleCollectionFilter = (collectionId: string) => {
    if (collectionFilter === collectionId) {
      setCollectionFilter("");
    } else {
      setCollectionFilter(collectionId);
    }
  };

  const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

  return (
    <>
      <style>{styles}</style>
      <section className="flex flex-col gap-1 mt-3">
        <h1 className="text-lg font-bold md:text-xl md:mb-2 md:mt-4">
          Categorías
        </h1>
        <div className="overflow-x-auto flex gap-3 scrollbar-hide h-12 md:h-16 pt-0.5 -mx-4 px-4">
          {collectionFilterOptions.map((option) => (
            <button
              key={option.collectionId}
              className={`filter-by-collection-option min-w-24 px-1 md:h-14 md:min-w-32 md:px-2 py-1 rounded-lg transition-colors duration-200 ${
                collectionFilter === option.collectionId
                  ? "bg-white text-black border-0 shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleCollectionFilter(option.collectionId)}
            >
              <p className="flex justify-between items-center text-xs pr-1 md:text-base">
                <span className="bg-background rounded-md p-1">
                  {option.icon}
                </span>
                {option.name}
              </p>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default FilterByCollection;

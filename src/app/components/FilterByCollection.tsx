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
      <section className="flex flex-col gap-4 mt-4">
        <h1 className="text-2xl font-bold">Categorías</h1>
        <div className="overflow-x-auto scrollbar-hide h-20 pt-1 -mx-4 px-4">
          <div className="flex gap-4">
            {collectionFilterOptions.map((option) => (
              <button
                key={option.collectionId}
                className={`filter-by-collection-option px-4 py-2 rounded-lg transition-colors duration-200 ${
                  collectionFilter === option.collectionId
                    ? "bg-white text-black border-0 shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => handleCollectionFilter(option.collectionId)}
              >
                <p className="flex gap-2 items-center">
                  <span className="bg-background rounded-lg p-2">
                    {option.icon}
                  </span>
                  {option.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterByCollection;

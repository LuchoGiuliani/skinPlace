import { useEffect, useState } from "react";

function GridSkins() {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://bymykel.github.io/CSGO-API/api/en/skins.json"
      );
      const jsonData = await response.json();
      setData(jsonData);
      setFilterData(jsonData.slice(0, 20)); // Set initial filterData
    } catch (err) {
      console.log("error al obtener datos de la API:", err);
    }
  };

  const handleFilterData = (category) => {
    if (data) {
      const filteredItems = data.filter((item) => {
        const categoryValue = item.category.name && item.category.name.toString();
        return (
          categoryValue &&
          categoryValue.toLowerCase() === category.toLowerCase()
        );
      });

      // Shuffle the filtered items
      const shuffledItems = shuffleArray(filteredItems);

      setFilterData(shuffledItems.slice(0, 20));
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div>
      <div className="flex gap-6 items-center justify-center p-8">
        <button
          className="hover:bg-slate-800 hover:text-yellow-700 text-white font-medium text-lg border rounded-md px-4 py-1 m-2 mb-6"
          onClick={() => handleFilterData("Knives")}
        >
          Knives
        </button>
        <button
          className="hover:bg-slate-800 hover:text-yellow-700 text-white font-medium text-lg border rounded-md px-4 py-1 m-2 mb-6"
          onClick={() => handleFilterData("Pistols")}
        >
          Pistols
        </button>
        <button
          className="hover:bg-slate-800 hover:text-yellow-700 text-white font-medium text-lg border rounded-md px-4 py-1 m-2 mb-6"
          onClick={() => handleFilterData("Rifles")}
        >
          Rifles
        </button>
       
      </div>
      <div className="overflow-hidden">
        {filterData ? (
          <ul className="grid grid-cols-4 overflow-hidden gap-4 px-20 ">
            {filterData.slice(0, 20).map((item) => (
              <li
                className="border bg-slate-800 opacity-80 rounded-md "
                key={item.id}
              >
                <h4 className="text-white leading-tight tracking-tight p-4 ">
                  {item.name}
                </h4>
                <img className="max-w-[148px]" src={item.image} alt="" />
              </li>
            ))}
          </ul>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
}

export default GridSkins;

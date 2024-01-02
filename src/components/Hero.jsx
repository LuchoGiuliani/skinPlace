import React, { useEffect, useState } from 'react';

function Carousel() {
  const [data, setData] = useState(null);
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://bymykel.github.io/CSGO-API/api/en/skins.json'
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.log('error al obtener datos de la API:', err);
      }
    };

    fetchData(); // Realizar la primera búsqueda al montar el componente

    const interval = setInterval(() => {
      fetchData(); // Realizar una búsqueda cada 10 segundos
    }, 10000);

    return () => {
      clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    };
  }, []); // El efecto solo se ejecuta una vez al montar el componente

  useEffect(() => {
    if (data) {
      const randomItems = getRandomItems(data, 5); // Obtener 5 elementos aleatorios
      setCarouselItems(randomItems);
    }
  }, [data]);

  const getRandomItems = (items, count) => {
    if (!items) return [];
    const shuffledItems = [...items].sort(() => 0.5 - Math.random());
    return shuffledItems.slice(0, count);
  };

  return (
    <div className="carousel flex gap-4 items-center justify-center p-6 bg-black">
      {carouselItems.map((item) => (
        <div className='border bg-slate-800 opacity-80 rounded-md p-2 ' key={item.id}>
          {item.name}
          <img className="items-center max-w-[168px]  " src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Carousel;

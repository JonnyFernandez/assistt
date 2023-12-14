import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import axios from 'axios';
import style from '../moreSeller/MoreSeller.module.css'

const MoreSeller = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/count');
        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = response.data;
        console.log('Data from API:', result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Ordena los datos de mayor a menor
  const sortedData = [...data].sort((a, b) => b.count - a.count);

  return (
    <div>
      <h2 className={style.title} >Productos más comprados</h2>
      <div className={`${style.chartcontainer} ${style.rechartswrapper}`}>
      {sortedData.length > 0 ? (
          <BarChart
          width={990}
          height={400}
          data={sortedData}
          barCategoryGap={5}
          margin={{ top: 15, right: 30, left: 40, bottom: 10 }} // Ajusta los márgenes
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{
              value: 'Productos',
              position: 'insideBottom',
              offset: -5, // Ajusta este valor según tus necesidades
              fontSize: 20,
              fill: '#1a00be',
              fontWeight: 'bold',
              textAnchor: 'start', // Cambia 'end' a 'start'
            }}
            tick={{ fontSize: 12, fill: '#1a00be' }} // Ajusta la fuente y el color de las marcas en el eje X
          />
      
          <YAxis
            tickCount={5}
            tickFormatter={(value) => `${value} Compras`}
            label={{
              value: 'Compras',
              angle: -90,
              position: 'insideLeft',
              offset: -25,
              fontSize: 20,
              fill: '#1a00be',
              fontWeight: 'bold',
            }}
            tick={{ fontSize: 12, fill: '#1a00be' }} // Ajusta la fuente y el color de las marcas en el eje Y
          />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 16, color: '#333' }} />
          <Bar
            dataKey="count"
            fill="#1a00be"
            barSize={30}
            radius={[5, 5, 0, 0]}
            label={{
              fontSize: 14,
              fill: '#fff',
              position: 'top',
              fontWeight: 'bold',
            }}
          />
        </BarChart>
      

) : (
    <div className={style.nodatacontainer} >
            <p className={style.nodata}>No hay datos para mostrar.</p>
          </div>
      )}
      </div>
    </div>
  );
};

export default MoreSeller;




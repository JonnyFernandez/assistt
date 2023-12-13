import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import c from './More_Seller.module.css'


const MoreSeller = ({ products }) => {
    const chartContainer = useRef(null);

    useEffect(() => {
        const ctx = chartContainer.current.getContext('2d');

        const productNames = products.map(product => product.name);
        const productCounts = products.map(product => product.count);

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: productNames,
                datasets: [{
                    label: 'Cantidad Vendida',
                    data: productCounts,
                    backgroundColor: 'rgba(243, 236, 111, 0.5)',
                    borderColor: '#8ecae6',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        return () => myChart.destroy(); // Destruir el gráfico al desmontar el componente
    }, [products]);

    return (
        <div>
            <div className={c.title}>Productos más vendidos</div>
            <canvas ref={chartContainer} width={900} height={300}></canvas>
        </div>
    );
};

export default MoreSeller;

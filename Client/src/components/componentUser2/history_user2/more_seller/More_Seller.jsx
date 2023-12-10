import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const More_Seller = () => {
    const chartContainer = useRef(null);

    useEffect(() => {
        const ctx = chartContainer.current.getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                datasets: [{
                    label: 'Órdenes Despachadas',
                    data: [12, 19, 3, 5, 2, 3, 7, 8, 10, 15, 20, 30], // Datos mensuales de órdenes despachadas
                    backgroundColor: 'rgba(243, 236, 111, 0.5)', // Color de las barras
                    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde de las barras
                    borderWidth: 1
                },

                ]
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
    }, []);



    return (
        <div>
            <div>Historial de órdenes</div>
            <canvas ref={chartContainer} width={900} height={300}></canvas>

        </div>
    );
}

export default More_Seller
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import g from './History_orders.module.css'

const HistoryOrders = () => {
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
                    backgroundColor: 'rgba(198, 218, 235, 0.5)', // Color de las barras
                    borderColor: 'rgba(198, 218, 235, 1)', // Color del borde de las barras
                    borderWidth: 2
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
        <div >
            <div className={g.title}>Historial de órdenes</div>
            <canvas ref={chartContainer} width={900} height={300}></canvas>

        </div>
    );
}

export default HistoryOrders;

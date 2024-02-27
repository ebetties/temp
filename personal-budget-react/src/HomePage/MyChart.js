import React, { useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

function MyChart() {
    useEffect(() => {
        const dataSource = {
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        '#ffcd56',
                        '#ff6384',
                        '#36a2eb',
                        '#ff00ff',
                        '#00ff00',
                        '#000080',
                        '#00ffff'
                    ],
                }
            ],
            labels: []
        };

        function createChart() {
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: dataSource
            });
        }

        function getBudget() {
            axios.get('http://localhost:5000/budget')
                .then(response => {
                    console.log('Data fetched successfully:', response.data);
                    response.data.myBudget.forEach((item, i) => {
                        dataSource.datasets[0].data[i] = item.budget;
                        dataSource.labels[i] = item.title;
                    });
                    createChart();
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        getBudget();
    }, []);

    return (
        <canvas id="myChart" width="400" height="400"></canvas>
    );
}

export default MyChart;

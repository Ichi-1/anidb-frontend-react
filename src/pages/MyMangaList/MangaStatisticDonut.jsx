import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Reading', 'Plan to read', 'Completed', 'Dropped'],

  datasets: [
    {
      label: '# of Votes',
      data: [5, 11, 3, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
      
    },
  ],
};

export const MangaStatisticDonut = () => {
  return (
    <div style={{height:"15px", width:"250px"}} >
        <Doughnut data={data} />
    </div>
  )

  
}

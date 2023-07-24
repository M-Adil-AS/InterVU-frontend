'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';

import { Bar, Line } from 'react-chartjs-2';
import {useEffect, useState} from 'react'
import Loading from '../loading'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend, 
  PointElement,
  LineElement,
  Filler,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
        suggestedMin: 0,
        ticks: {
          stepSize: 1
        }
    }
  },
  elements: {
    point:{
        radius: 0
    }
  }
};

export default function Graph({monthlyApp, isLoading}) {
  const [chart, setChart] = useState('Bar')

  const labels = isLoading ? [] : monthlyApp.map(elem => elem.date);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        data: isLoading ? [] : monthlyApp.map(elem => elem.count),
        tension:0.5,
        maxBarThickness: 100,  
      }
    ],
  };

  return (
    <div className="pt-12 sm:p-8 sm:pt-16">
      {!isLoading ? 
        <div className={`${!labels.length && 'hidden'}`}>
          <p className="mb-3 text-xl md:text-xl text-center px-2">Monthly Interviews</p>
          <p className="mb-3 text-lg text-primary-700 text-center px-2"><span onClick={()=> setChart(chart=='Bar'?'Area':'Bar')}>{chart} Chart</span></p>
          {chart=='Bar'?
            <div>
              <Bar options={options} data={data} height={400}/>
            </div>:
            <div>
              <Line options={options} data={data} height={400}/>
            </div>
          }
        </div>:
        <Loading/>}
    </div>
  )
}  
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
import Loading from '../(main)/loading'

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

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      data: [100,500,300,600,200,900,700],
      tension:0.5
    }
  ],
};

export default function Graph() {
  const [loading, setLoading] = useState(true)
  const [chart, setChart] = useState('Bar')

    useEffect(()=>{
      setLoading(false)
    },[])

    return (
      <div className="pt-12 sm:p-8 sm:pt-16">
        {!loading ? 
          <div>
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
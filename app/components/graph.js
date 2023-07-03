'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import {useEffect, useState} from 'react'
import Loading from '../(main)/loading'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100,500,300,600,200,900,700],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

export default function Graph() {
  const [loading, setLoading] = useState(true)
  const [chart, setChart] = useState('bar')

    useEffect(()=>{
      setLoading(false)
    },[])

    return (
      <div className="pt-12 sm:p-8 sm:pt-16">
        {!loading ? 
          <div>
            <p className="mb-3 text-xl md:text-xl text-center px-2">Monthly Applications</p>
            <p className="mb-3 text-lg text-blue-500 text-center px-2">Bar Chart</p>
            <div>
              <Bar options={options} data={data} height={400}/>
            </div>
          </div>:
          <Loading/>}
      </div>
    )
}  
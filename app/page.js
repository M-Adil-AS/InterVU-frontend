'use client'

import Graph from './components/graph'
import {useState, useContext, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import {AppContext} from './context'

export default function Home() {
  const [stats, setStats] = useState(null)
  const [monthlyApp, setMonthlyApp] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const {state,dispatch} = useContext(AppContext)
  const router = useRouter()

  const fetchStats = async() => {
    try{
        const response = await fetch('http://localhost:5000/api/v1/interviews/stats', {
            cache: 'no-store',
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })

        const data = await response.json()

        if(response.status==401){
            dispatch({type:'set toast', payload:{type:'error', text: data.msg}})
            router.push('/')
            router.refresh()
        }
        else if (!response.ok) {
            dispatch({type:'set toast', payload:{type:'error', text: data.msg}})
        }
        else if (response.ok){
            setStats(data.defaultStats)
            setMonthlyApp(data.monthlyApplications)
            setLoading(false)
        } 
    }
    catch(error){
        dispatch({type:'set toast', payload:{type:'error', text: 'Something went wrong try again later'}})
    }
  }

  useEffect(()=>{
      fetchStats()
  },[])

  return (
    <div className="p-4 lg:ml-64">
      <div className="px-2 py-4 sm:p-4 rounded-lg dark:border-gray-700 mt-14">
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
          <div href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow border-b-[#647ACB] border-b-4">
            <div className='flex justify-between'>
              <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-[#647ACB] dark:text-white">{stats ? stats.Scheduled : 0}</h1>
              <span className='sm:bg-[#E0E8F9] p-2 sm:p-3 rounded'>
                <svg
                  className="w-6 h-6 text-[#647ACB] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                </svg>
              </span>
            </div>
            <p className="font-bold text-lg text-gray-800 dark:text-gray-400">Scheduled</p>
          </div>
          <div href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow border-b-[#E9B949] border-b-4">
            <div className='flex justify-between'>
              <h5 className="mb-2 text-4xl font-extrabold tracking-tight text-[#E9B949] dark:text-white">{stats ? stats.Pending : 0}</h5>
              <span className='sm:bg-[#FCEFC7] p-2 sm:p-3 rounded'>
                  <svg
                    className="w-6 h-6 text-[#E9B949] dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
                    <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
                  </svg>
                </span>
              </div>
            <p className="font-bold text-lg text-gray-800 dark:text-gray-400">Pending</p>
          </div>
          <div href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow border-b-[#D66A6A] border-b-4">
            <div className='flex justify-between'>
              <h5 className="mb-2 text-4xl font-extrabold tracking-tight text-[#D66A6A] dark:text-white">{stats ? stats.Rejected : 0}</h5>
              <span className='sm:bg-[#FFEEEE] p-2 sm:p-3 rounded'>
                <svg
                  className="w-6 h-6 text-[#D66A6A] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 20"
                >
                  <path d="M16.025 15H14.91c.058-.33.088-.665.09-1v-1h2a1 1 0 0 0 0-2h-2.09a5.97 5.97 0 0 0-.26-1h.375a2 2 0 0 0 2-2V6a1 1 0 0 0-2 0v2H13.46a6.239 6.239 0 0 0-.46-.46V6a3.963 3.963 0 0 0-.986-2.6l.693-.693A1 1 0 0 0 13 2V1a1 1 0 0 0-2 0v.586l-.661.661a3.753 3.753 0 0 0-2.678 0L7 1.586V1a1 1 0 0 0-2 0v1a1 1 0 0 0 .293.707l.693.693A3.963 3.963 0 0 0 5 6v1.54a6.239 6.239 0 0 0-.46.46H3V6a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h.35a5.97 5.97 0 0 0-.26 1H1a1 1 0 0 0 0 2h2v1a6 6 0 0 0 .09 1H2a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h1.812A6.012 6.012 0 0 0 8 19.907V10a1 1 0 0 1 2 0v9.907A6.011 6.011 0 0 0 14.188 17h1.837v2a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2ZM11 6.35a5.922 5.922 0 0 0-.941-.251l-.111-.017a5.52 5.52 0 0 0-1.9 0l-.111.017A5.924 5.924 0 0 0 7 6.35V6a2 2 0 1 1 4 0v.35Z" />
                </svg>
                </span>
            </div>
            <p className="font-bold text-lg text-gray-800 dark:text-gray-400">Rejected</p>
          </div>
          <div href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow border-b-[#59B984] border-b-4">
            <div className='flex justify-between'>
              <h5 className="mb-2 text-4xl font-extrabold tracking-tight text-[#59B984] dark:text-white">{stats ? stats.Cleared : 0}</h5>
              <span className='sm:bg-[#E6F5E6] p-2 sm:p-3 rounded'>
                <svg
                  className="w-6 h-6 text-[#59B984] dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              </span>
            </div>
            <p className="font-bold text-lg text-gray-800 dark:text-gray-400">Cleared</p>
          </div>
        </div>
        <Graph monthlyApp={monthlyApp} isLoading={isLoading}/>
      </div>
    </div>
  )
}

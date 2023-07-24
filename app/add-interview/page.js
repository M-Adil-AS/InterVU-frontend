'use client'
import {useState, useContext} from 'react'
import { useRouter } from 'next/navigation';
import {AppContext} from '../context'

export default function Add_Interview() {
    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('Scheduled')
    const [type, setType] = useState('Onsite')
    const {state,dispatch} = useContext(AppContext)
    const router = useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            const response = await fetch('http://localhost:5000/api/v1/interviews', {
                cache: 'no-store',
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({position, company, time, date, status, type}),
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
                dispatch({type:'set toast', payload:{type:'success', text: `Interview created`}})
            } 
        }
        catch(error){
            dispatch({type:'set toast', payload:{type:'error', text: 'Something went wrong try again later'}})
        }
    }
 
    return (
        <div className="p-4 lg:ml-64">
            <div className="px-2 py-4 sm:p-4 rounded-lg dark:border-gray-700 mt-14">
            
                <div className='block p-8 sm:p-12 pb-5 sm:pb-8 bg-white border border-gray-200 rounded-lg shadow '>
                    <p className="mb-6 text-2xl sm:text-3xl">Add Interview</p>

                    <form className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4' onSubmit={(e)=> handleSubmit(e)}>
                        
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="position"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Position
                            </label>
                            <input
                            type="text"
                            id="position"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Junior Backend Developer"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            required
                            />
                        </div>
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="company"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Company
                            </label>
                            <input
                            type="text"
                            id="company"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Folio3"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                            />
                        </div>
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="date"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Date
                            </label>
                            <input
                            type="date"
                            id="date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            />
                        </div>
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="time"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Time
                            </label>
                            <input
                            type="time"
                            id="time"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            />
                        </div>
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="status"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Status
                            </label>
                            <select
                                id="status"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={status}
                                onChange={(e)=>setStatus(e.target.value)}
                                required
                                >
                                    <option>Scheduled</option>
                                    <option>Pending</option>
                                    <option>Rejected</option>
                                    <option>Cleared</option>
                            </select>
                        </div>
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="type"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Interview Type
                            </label>
                            <select
                                id="type"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={type}
                                onChange={(e)=>setType(e.target.value)}
                                required
                                >
                                    <option>Onsite</option>
                                    <option>Online</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <button
                                type="submit"
                                className="block text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Submit
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
      )
  }  
'use client'
import {useEffect, useState} from 'react'
import Loading from '../loading'
import Interview from '../../components/interview'

export default function All_Interviews() {
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchInterviews = async() => {
            await new Promise(resolve => setTimeout(() => {setLoading(false), resolve()}, 1000))
        }

        fetchInterviews()
    },[])

    return (
        <div className="p-4 lg:ml-64">
            <div className="px-2 py-4 sm:p-4 rounded-lg dark:border-gray-700 mt-14">
            
                <div className='block p-8 sm:p-12 pb-5 sm:pb-8 bg-white border border-gray-200 rounded-lg shadow '>
                    <p className="mb-6 text-2xl sm:text-3xl">Search Form</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="search"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Search
                            </label>
                            <input
                            type="text"
                            id="search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search by Position or Company Name"
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
                            >
                                <option>All</option>
                                <option>Scheduled</option>
                                <option>Cleared</option>
                                <option>Pending</option>
                                <option>Rejected</option>
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
                            >
                                <option>All</option>
                                <option>Onsite</option>
                                <option>Online</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label
                            htmlFor="sort"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Sort
                            </label>
                            <select
                            id="sort"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option>Latest</option>
                                <option>a-z</option>
                            </select>
                        </div>
                        
                    </div>
                </div>

                {loading ? <Loading/> : 
                <>
                    <p className="mb-3 mt-8 text-lg md:text-xl"><strong>36 Interviews</strong></p>
                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4'>
                        <Interview id='1'/>                    
                    </div>
       
                    <div className='flex justify-center'>
                        <nav aria-label="Page navigation example" className='mt-6'>
                            <ul className="flex items-center flex-wrap -space-x-px h-10 text-sm sm:text-base">
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-9 sm:px-4 sm:h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                <span className="sr-only">Previous</span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 1 1 5l4 4"
                                    />
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-9 sm:px-4 sm:h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                11
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-9 sm:px-4 sm:h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                12
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                aria-current="page"
                                className="z-10 flex items-center justify-center px-3 h-9 sm:px-4 sm:h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                >
                                13
                                </a>
                            </li>
                            <li>
                                <a
                                href="#"
                                className="flex items-center justify-center px-3 h-9 sm:px-4 sm:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                <span className="sr-only">Next</span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                </a>
                            </li>
                            </ul>
                        </nav>
                    </div>

                </>
                }
            </div>
        </div>
    )
}  
'use client'
import {useState, useContext, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import {AppContext} from '../../context'
import Loading from '../../loading';

export default function Edit_Interview({ params }) {
    const [isLoading, setLoading] = useState(true)
    const [interview, setInterview] = useState({
        position: '',
        company: '',
        status: '',
        type: '',
        time: '',
        date: ''
    })
    const {state,dispatch} = useContext(AppContext)
    const router = useRouter()

    const handleChange = (e) => {
        const value = e.target.value
        setInterview({
            ...interview,
            [e.target.name]: value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            const response = await fetch(`http://localhost:5000/api/v1/interviews/${params.id}`, {
                cache: 'no-store',
                credentials: 'include',
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(interview),
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
                dispatch({type:'set toast', payload:{type:'success', text: `Interview Updated`}})
            } 
        }
        catch(error){
            dispatch({type:'set toast', payload:{type:'error', text: 'Something went wrong try again later'}})
        }
    }

    const fetchInterviewInfo = async() => {
        try{
            const response = await fetch(`http://localhost:5000/api/v1/interviews/${params.id}`, {
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
                setInterview(data.interview)
                setLoading(false)
            } 
        }
        catch(error){
            dispatch({type:'set toast', payload:{type:'error', text: 'Something went wrong try again later'}})
        }
    }

    useEffect(()=>{
        fetchInterviewInfo()
    },[])

    if(isLoading){
        return (
            <div className='mt-[5rem] lg:pl-[16rem]'>
                <Loading/>
            </div>
        )
    }

    return (
        <div className="p-4 lg:ml-64">
            <div className="px-2 py-4 sm:p-4 rounded-lg dark:border-gray-700 mt-14">
            
                <div className='block p-8 sm:p-12 pb-5 sm:pb-8 bg-white border border-gray-200 rounded-lg shadow '>
                    <p className="mb-6 text-2xl sm:text-3xl">Edit Interview</p>

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
                            name='position'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Junior Backend Developer"
                            value={interview.position}
                            onChange={(e)=> handleChange(e)}
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
                            name='company'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Folio3"
                            value={interview.company}
                            onChange={(e)=> handleChange(e)}
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
                            name='date'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={interview.date}
                            onChange={(e)=> handleChange(e)}
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
                            name='time'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={interview.time}
                            onChange={(e)=> handleChange(e)}
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
                                name='status'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={interview.status}
                                onChange={(e)=> handleChange(e)}
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
                                name='type'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={interview.type}
                                onChange={(e)=> handleChange(e)}
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
                                Update
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}  
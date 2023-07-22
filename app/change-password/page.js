'use client'
import {useState, useContext} from 'react'
import { useRouter } from 'next/navigation';
import {AppContext} from '../context'

export default function Password() {
    const [password, setPassword] = useState('')
    const [oldpassword, setOldpassword] = useState('')
    const {state,dispatch} = useContext(AppContext)
    const router = useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            const response = await fetch('http://localhost:5000/api/v1/auth/updatePassword', {
                cache: 'no-store',
                credentials: 'include',
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({password, oldpassword}),
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
                setPassword('')
                setOldpassword('')
                dispatch({type:'set toast', payload:{type:'success', text: `Password Updated`}})
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
                    <p className="mb-6 text-2xl sm:text-3xl">Change Password</p>

                    <form className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4' onSubmit={(e)=> handleSubmit(e)}>
                        
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="old"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Old Password
                            </label>
                            <input
                            type="password"
                            id="old"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="••••••••"
                            value={oldpassword}
                            onChange={(e) => setOldpassword(e.target.value)}
                            required
                            />
                        </div>
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="new"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            New Password
                            </label>
                            <input
                            type="password"
                            id="new"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                            htmlFor="submit"
                            className="hidden mb-2 xl:block text-sm font-medium text-gray-900 dark:text-white"
                            >
                            &nbsp;
                            </label>
                            <button
                                type="submit"
                                className="block text-white bg-primary-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Update Password
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}  
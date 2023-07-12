import Link from 'next/link'

export default function Profile() {
    return (
        <div className="p-4 lg:ml-64">
            <div className="px-2 py-4 sm:p-4 rounded-lg dark:border-gray-700 mt-14">
            
                <div className='block p-8 sm:p-12 pb-5 sm:pb-8 bg-white border border-gray-200 rounded-lg shadow '>
                    <p className="mb-6 text-2xl sm:text-3xl">Profile</p>

                    <form className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Your Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="johndoe"
                            required
                            />
                        </div>
                        <div className="md:mb-6 mb-2">
                            <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Your email
                            </label>
                            <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="johndoe@gmail.com"
                            required
                            />
                        </div>
                        <div className="md:mb-6 mb-2">
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
                                Update Profile
                            </button>
                        </div>
                        
                    </form>

                    <p className="text-center sm:text-right mt-4 mb-2 text-sm font-light text-gray-500 dark:text-gray-400">
                        <Link
                        href="/change-password"
                        className="font-medium text-primary-700 hover:text-primary-800"
                        >
                        Change Password?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}  
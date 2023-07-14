'use client'
import Link from 'next/link'
import {useState} from 'react'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:5000/api/v1/auth/register', {
            cache: 'no-store',
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({name, email, password}),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
            <img
                className="w-8 h-8 mr-2"
                src="/CV_logo.png"
                alt="logo"
            />
            interVU
            </a>
            <div className="w-full bg-white rounded-lg border-t-4 border-t-primary-700 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Name
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Email
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Password
                    </label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Register
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                    href="/login"
                    className="font-medium text-primary-700 hover:underline dark:text-primary-500"
                    >
                    Login here
                    </Link>
                </p>
                </form>
            </div>
            </div>
        </div>
        </section>

    )
};

export default Register;
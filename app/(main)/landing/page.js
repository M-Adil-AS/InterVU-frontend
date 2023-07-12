import Link from 'next/link'

const Landing = () => {
  return (
    <section>
        <div className="w-[100%] flex flex-row flex-wrap h-[91vh]">
          <div className="w-[60%] m-auto lg:py-[40px] lg:pl-24 py-[45px] pl-0">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none sm:text-5xl xl:text-6xl dark:text-white">Interview <span className='text-primary-700'>Tracking</span> App</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 sm:text-lg lg:text-xl dark:text-gray-400">interVU is a cutting-edge web application designed to simplify and enhance your job interview experience. With interVU, you can effortlessly manage and organize all your job interviews in one centralized platform.</p>
              <Link href='/login' className="inline-flex items-center justify-center px-5 py-3 mr-3 text-sm sm:text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition-colors">
                  Login / Register
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
          </div>
          <div className="hidden lg:flex w-[40%] m-auto px-[20px] py-[40px]">
              <img src="/landing.png" alt="mockup" className='object-cover'/>
          </div>                
      </div>
    </section>
  )
};

export default Landing;
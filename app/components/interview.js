import Link from 'next/link'

export default function Interview({interview, deleteInterview}) {
    const {_id, position, company, status, type, time, date} = interview

    let statusBg
    let statusText

    if(status=='Scheduled'){statusText='text-primary-700'; statusBg='bg-[#E0E8F9]'}
    else if(status=='Pending'){statusText='text-[#E9B949]'; statusBg='bg-[#FCEFC7]'}
    else if(status=='Rejected'){statusText='text-[#D66A6A]'; statusBg='bg-[#FFEEEE]'}
    else if(status=='Cleared'){statusText='text-[#59B984]'; statusBg='bg-[#E6F5E6]'}

    return (
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div className='bg-primary-700 w-[50px] h-[50px] mr-4 rounded-full text-white text-lg flex flex-shrink-0 items-center justify-center'>{company[0].toUpperCase()}</div>
                    <div className='mr-4'>
                        <p className="text-lg font-normal">{position}</p>
                        <p className="text-md text-gray-500 font-normal">{company}</p>                       
                    </div>
                </div>
            </div>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 auto-rows-[1fr]'>
                <div className='flex row items-center '>
                    <span className='mr-2'>
                    <svg
                        className="w-4 h-4 text-gray-400 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                        >
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    </span>
                    <span>{type}</span>
                </div>
                <div className='flex row items-center  '>
                    <span className='mr-2'>
                        <svg
                        className="w-4 h-4 text-gray-400 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                        </svg>
                    </span>
                    <span className='truncate '>{date}</span>
                </div>
                <div className='flex row items-center  '>
                    <span className='mr-2'>
                    <svg
                        className="w-4 h-4 text-gray-400 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                    </svg>
                    </span>
                    <span>{time}</span>
                </div>
                <div className='flex row items-center  '>
                    <span className='mr-2'>
                        <svg
                            className="w-4 h-4 text-[#59B984] dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                            >
                            <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                            <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                        </svg>
                    </span>
                    <Link href={`/edit-interview/${_id}`}>
                        <button className='text-[#59B984] font-bold'>Edit</button>
                    </Link>
                </div>
                <div className='flex row items-center  '>
                    <span className='mr-2'>
                    <svg
                        className="w-4 h-4 text-[#D66A6A] dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                        >
                        <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                    </svg>

                    </span>
                    <button className='text-[#D66A6A] font-bold' onClick={(e)=> deleteInterview(_id)}>Delete</button>
                </div>
                <div className='flex row items-center  '>
                    <span className={`${statusText} ${statusBg} py-1 px-2 font-bold rounded`}>{status}</span>
                </div>                              
            </div>
        </div>
    )
}
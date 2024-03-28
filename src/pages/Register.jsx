import React from 'react'
import { Link } from 'react-router-dom';


function Register() {
    return (
        <div className="h-screen px-2 overflow-hidden w-full bg-[#FAFBFC] relative flex justify-center items-center">
            <div className="flex justify-between items-center px-5 py-6 absolute top-0 w-full">
                <div>
                    <img src="/logo.png" className="w-[140px]" alt="" />
                </div>
                <div className="flex items-center">
                    <p className="hidden md:flex font-medium text-sm mr-5">Already a member of Brand?</p>
                    <Link to={'/login'} className="text-white bg-[#4F46E5] hover:bg-[#433BCB] focus:ring-4 focus:ring-primary rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none font-bold shade">Sign in</Link>
                </div>
            </div>
            <div className="bg-white py-10 px-16 w-[480px] rounded-2xl z-50 shade">
                <h1 className="text-2xl md:text-3xl text-center font-semibold mb-3">Let's dive in!</h1>
                <form>
                    <div className="w-full mt-6 mb-3">
                        <label for="" className="text-[11px] font-medium">Full Name</label>
                        <div className="mt-0.5 flex items-center w-full px-3 border-2 border-gray-300 rounded-lg">
                            <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z" />
                            </svg>
                            <input type="text" placeholder="Enter username" className="w-full py-2 text-sm pl-2 !bg-white focus:outline-none border-none" />
                        </div>
                    </div>
                    <div className="w-full my-3">
                        <label for="" className="text-[11px] font-medium">Email</label>
                        <div className="mt-0.5 flex items-center w-full px-3 border-2 border-gray-300 rounded-lg">
                            <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2" />
                            </svg>
                            <input type="text" placeholder="Enter your email" className="w-full py-2 text-sm pl-2 !bg-white focus:outline-none border-none" />
                        </div>
                    </div>
                    <div className="w-full my-3">
                        <label for="" className="text-[11px] font-medium">Choose Password</label>
                        <div className="mt-0.5 relative flex items-center w-full px-3 border-2 border-gray-300 rounded-lg">
                            <svg className="w-4 h-4 absolute text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
                            </svg>
                            <input type="password" placeholder="Minimum 8 characters" className="w-full py-2 ml-4 text-sm pl-2 !bg-white focus:outline-none border-none" />
                        </div>
                    </div>
                </form>
                <button className="text-white bg-[#4F46E5] hover:bg-[#433BCB] rounded-lg text-sm px-4 lg:px-5 py-3 lg:py-3.5 focus:outline-none font-extrabold w-full mt-3 shade">Sign up with Brand</button>
            </div>
            <div className="bg__img"></div>
        </div>
    )
}

export default Register
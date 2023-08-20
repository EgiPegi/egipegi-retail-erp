import { initFlowbite } from 'flowbite';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { accountService, alertService } from '../../_services';
import { Alert } from '../../components/Alert';
import { ImSpinner10 } from "react-icons/im";

const Login = () => {
    // let user = useLoaderData();
    let { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        accountService.logout();
        // console.log('test', user);
        initFlowbite();
    }, [pathname]);

    function onSubmit(e) {
        setIsLoading(true)
        e.preventDefault()
        alertService.clear();
        const email = e.target['email'].value
        const password = e.target['password'].value
        console.log(email, password)
        accountService.login(email, password)
            .then(() => {
                setIsLoading(false)
                navigate('/')
            })
            .catch(error => {
                setIsLoading(false)
                alertService.error(error);
            });
    }
    return (
        <div className='flex flex-col w-full min-h-screen justify-center items-center'>
            <Alert />
            <div className="text-2xl font-bold mb-2 text-indigo-900">Login App</div>
            <form onSubmit={onSubmit} className='max-w-md w-full bg-slate-50 p-10 rounded-md shadow-md'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" required />
                </div>
                <button disabled={isLoading} type="submit" className="flex disabled:bg-indigo-400 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                    {
                        isLoading && <ImSpinner10 size={18} className='animate-spin mr-2 ml-0' />
                    }
                    Submit
                </button>
            </form>

        </div>
    )
}

export default Login
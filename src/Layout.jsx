import React, { useEffect, useState } from 'react'
import SideBarComponent from './components/SideBarComponent'
import { BreadCrumb } from './components/BreadCrumb'
import { Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { initFlowbite } from 'flowbite'
import { ImSpinner10 } from 'react-icons/im'
import { Alert } from './components/Alert'



const Layout = () => {
    let { user } = useLoaderData();
    let { pathname } = useLocation();
    const nav = useNavigate()

    useEffect(() => {
        // console.log('test', user);
        if (!user) {
            nav('/login')
        }
        initFlowbite();
    }, [pathname]); // <--- no empty array on this


    if (!user) return <ImSpinner10 size={18} className='animate-spin mr-2 ml-0' />


    return (
        <>
            <Alert />
            <SideBarComponent />
            <div className="p-4 sm:ml-64 dark:bg-gray-700">
                <BreadCrumb pathname={pathname} />
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-800">
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default Layout
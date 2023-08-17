import React, { useEffect, useState } from 'react'
import SideBarComponent from './components/SideBarComponent'
import { BreadCrumb } from './components/BreadCrumb'
import { Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { initFlowbite } from 'flowbite'



const Layout = () => {
    let { user } = useLoaderData();
    let { pathname } = useLocation();
    const nav = useNavigate()

    useEffect(() => {
        console.log('test', user);
        if (!user) {
            nav('/login')
        }
        initFlowbite();
    }, [pathname]); // <--- no empty array on this



    return (
        <>
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
import React, { useEffect, useState } from 'react'
import SideBarComponent from './components/SideBarComponent'
import { BreadCrumb } from './components/BreadCrumb'
import { Outlet, useLoaderData, useLocation } from 'react-router-dom'
import { initFlowbite } from 'flowbite'



const Layout = () => {
    let { username } = useLoaderData();
    let { pathname } = useLocation();

    useEffect(() => {
        // console.log(pathname);
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
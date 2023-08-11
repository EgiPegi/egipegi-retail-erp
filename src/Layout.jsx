import { Flowbite } from 'flowbite-react'
import React, { useEffect } from 'react'
import SideBarComponent from './components/SideBarComponent'
import { BreadCrumb } from './components/BreadCrumb'
import { Outlet, useLoaderData } from 'react-router-dom'



const Layout = () => {
    let { username } = useLoaderData();
    // useEffect(() => {
    //     if (username) {
    //         redirect("/dashboard")
    //     }
    // }, [username])

    console.log(username);

    return (
        <Flowbite>
            <SideBarComponent />
            <div className="p-4 sm:ml-64 dark:bg-gray-700">
                <BreadCrumb />
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-800">
                    <Outlet />
                </div>
            </div>

        </Flowbite>
    )
}

export default Layout
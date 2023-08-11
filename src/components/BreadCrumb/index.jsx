import React from 'react'
import { HiChevronLeft, HiHome } from 'react-icons/hi'
import { Link } from 'react-router-dom';

export const BreadCrumb = ({ pathname }) => {



    return (

        <nav className="flex mt-16 mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">

                <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <HiHome className='mr-3' />
                        home
                    </Link>
                </li>
                {
                    pathname !== '/' && pathname.split('/').slice(1).map((p, k) => {
                        return (
                            <li key={k}>
                                <div className="flex items-center">
                                    <HiChevronLeft />
                                    <Link to={pathname} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{p}</Link>
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </nav>

    )
}

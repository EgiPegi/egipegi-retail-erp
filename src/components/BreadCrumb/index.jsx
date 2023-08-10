import React from 'react'
import { HiChevronLeft, HiHome } from 'react-icons/hi'

export const BreadCrumb = () => {
    return (

        <nav className="flex mt-16 mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <HiHome />
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <HiChevronLeft />
                        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <HiChevronLeft />
                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">EgiPegi</span>
                    </div>
                </li>
            </ol>
        </nav>

    )
}

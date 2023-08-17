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
                        let path = ''
                        let page = p
                        for (let i = 0; i <= k; i++) {
                            path = path + '/' + pathname.split('/').slice(1)[i];
                        }
                        if (k + 1 < pathname.split('/').slice(1).length) {
                            path = path + "/1"
                        }
                        if (k + 1 === pathname.split('/').slice(1).length) {
                            page = "page : " + page
                        }
                        if (k === 0) {
                            path = '/'
                        }
                        // console.log(path)
                        return (
                            <li key={k}>
                                <div className="flex items-center">
                                    <HiChevronLeft />
                                    <Link to={path} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">{page}</Link>
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </nav>

    )
}

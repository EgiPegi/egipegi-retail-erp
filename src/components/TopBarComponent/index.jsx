import React from 'react'

import { HiMenuAlt2 } from 'react-icons/hi';

export const TopBarComponent = () => {
    return (
        <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-indigo-800 to-indigo-700  border-b border-indigo-700 dark:from-indigo-950 dark:to-indigo-950 dark:border-indigo-950">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open sidebar</span>
                            <HiMenuAlt2 />
                        </button>
                        <a href="/" className="flex ml-2 md:mr-24">
                            <img src="shopify.png" className="h-8 mr-3" alt="FlowBite Logo" />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-slate-300 dark:text-white">Retail ERP</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ml-3">
                            <div>
                                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src="wan-qodir.jpeg" alt="user photo" />
                                </button>
                            </div>
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                                        Wan Qodir
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                        wan.qodir@egipegi.com
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

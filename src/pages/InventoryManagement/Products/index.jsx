import React from 'react'
import { FaListAlt, FaSearch, FaTrash } from 'react-icons/fa'
import { FaPencil, FaX } from 'react-icons/fa6'

const Products = () => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4 bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaSearch />
                        </div>
                        <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Brand
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-1 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Apple
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                        <FaPencil />
                                    </button>
                                    <button data-modal-target="deleteModal" data-modal-toggle="deleteModal" type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                Apple
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                        <FaPencil />
                                    </button>
                                    <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Apple
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                        <FaPencil />
                                    </button>
                                    <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Watch
                            </th>
                            <td className="px-6 py-4">
                                Apple
                            </td>
                            <td className="px-6 py-4">
                                Watches
                            </td>
                            <td className="px-6 py-4">
                                $199
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                        <FaPencil />
                                    </button>
                                    <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple iMac
                            </th>
                            <td className="px-6 py-4">
                                Apple
                            </td>
                            <td className="px-6 py-4">
                                PC
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                        <FaPencil />
                                    </button>
                                    <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple AirPods
                            </th>
                            <td className="px-6 py-4">
                                Apple
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $399
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                        <FaPencil />
                                    </button>
                                    <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                iPad Pro
                            </th>
                            <td className="px-6 py-4">
                                Apple
                            </td>
                            <td className="px-6 py-4">
                                Tablet
                            </td>
                            <td className="px-6 py-4">
                                $699
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                        <FaPencil />
                                    </button>
                                    <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Keyboard
                            </th>
                            <td className="px-6 py-4">
                                Apple
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                        <FaPencil />
                                    </button>
                                    <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Smart Folio iPad Air
                            </th>
                            <td className="px-6 py-4">
                                Apple
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $79
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                        <FaPencil />
                                    </button>
                                    <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                AirTag
                            </th>
                            <td className="px-6 py-4">
                                Apple
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $29
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                        <FaPencil />
                                    </button>
                                    <button type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav className="flex items-center justify-between p-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul className="inline-flex -space-x-px text-sm h-8">
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>


            {/* <!-- Main modal --> */}
            <div id="deleteModal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Delete Product?
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="deleteModal">
                                <FaX />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">
                            <p className="text-xl leading-relaxed text-gray-500 dark:text-gray-400">
                                Are you sure you want to remove this product?
                            </p>
                            <p className="text-xs italic leading-relaxed text-gray-500 dark:text-gray-400">
                                *Deleted products will be stored in the trash, you can restore them from the trash or delete them permanently there.
                            </p>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center justify-end p-6 space-x-2  border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="deleteModal" type="button" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={() => console.log('halo')}>Hapus</button>
                            <button data-modal-hide="deleteModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
import React, { useState } from 'react'
import { FaListAlt, FaPlus, FaSearch, FaTrash } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'
import DelModal from './DelModal'
import AddEditModal from './AddEditModal'
import { Link, useLocation, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [coverUrl, setCoverUrl] = useState("https://down-id.img.susercontent.com/file/c175203419190e548bbeba77250724d8")
    let param = useParams();
    let { pathname } = useLocation();
    return (
        <div>
            <div className='mb-5 md:flex'>
                <div className='md:w-1/2  flex justify-center items-center'>
                    <img className='w-100' src={coverUrl} alt="cover" />
                </div>
                <div className='md:w-1/2'>
                    <div className='flex flex-wrap justify-end items-start gap-1'>
                        <img className='w-14 h-14 md:w-32 md:h-32 border cursor-pointer hover:opacity-50' src="https://down-id.img.susercontent.com/file/c175203419190e548bbeba77250724d8" alt="..1" onClick={() => setCoverUrl("https://down-id.img.susercontent.com/file/c175203419190e548bbeba77250724d8")} />
                        <img className='w-14 h-14 md:w-32 md:h-32 border cursor-pointer hover:opacity-50' src="https://down-id.img.susercontent.com/file/18968ce95f8ba252134d2fff32d901b4" alt="..2" onClick={() => setCoverUrl("https://down-id.img.susercontent.com/file/18968ce95f8ba252134d2fff32d901b4")} />
                        <img className='w-14 h-14 md:w-32 md:h-32 border cursor-pointer hover:opacity-50' src="https://down-id.img.susercontent.com/file/e7757de590f925365eef5f8f5e5e9c39" alt="..3" onClick={() => setCoverUrl("https://down-id.img.susercontent.com/file/e7757de590f925365eef5f8f5e5e9c39")} />
                        <img className='w-14 h-14 md:w-32 md:h-32 border cursor-pointer hover:opacity-50' src="https://down-id.img.susercontent.com/file/053b86b29bd93ab4a3cfa7f77612c441" alt="..4" onClick={() => setCoverUrl("https://down-id.img.susercontent.com/file/053b86b29bd93ab4a3cfa7f77612c441")} />
                        <img className='w-14 h-14 md:w-32 md:h-32 border cursor-pointer hover:opacity-50' src="https://down-id.img.susercontent.com/file/e07297364b1dbf273e172c1464757279" alt="..5" onClick={() => setCoverUrl("https://down-id.img.susercontent.com/file/e07297364b1dbf273e172c1464757279")} />
                        <img className='w-14 h-14 md:w-32 md:h-32 border cursor-pointer hover:opacity-50' src="https://down-id.img.susercontent.com/file/9ab989e4d8f710054b8af43196a7acd9" alt="..5" onClick={() => setCoverUrl("https://down-id.img.susercontent.com/file/9ab989e4d8f710054b8af43196a7acd9")} />
                        <img className='w-14 h-14 md:w-32 md:h-32 border cursor-pointer hover:opacity-50' src="https://down-id.img.susercontent.com/file/7dde9eaeade827adea39fa3737d28171" alt="..5" onClick={() => setCoverUrl("https://down-id.img.susercontent.com/file/7dde9eaeade827adea39fa3737d28171")} />
                        <img className='w-14 h-14 md:w-32 md:h-32 border cursor-pointer hover:opacity-50' src="https://down-id.img.susercontent.com/file/a74e5fe6bc43d412a54e2cec2c5083b1" alt="..5" onClick={() => setCoverUrl("https://down-id.img.susercontent.com/file/a74e5fe6bc43d412a54e2cec2c5083b1")} />
                        <img className='w-14 h-14 md:w-32 md:h-32 border cursor-pointer hover:opacity-50' src="https://down-id.img.susercontent.com/file/7d93d439457679d3d1a97641298032b3" alt="..5" onClick={() => setCoverUrl("https://down-id.img.susercontent.com/file/7d93d439457679d3d1a97641298032b3")} />
                    </div>
                </div>
            </div>
            <div className="mb-5 p-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-56 md:rounded-none md:rounded-l-lg" src="https://down-id.img.susercontent.com/file/c175203419190e548bbeba77250724d8" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Apple MacBook Pro (13.3inch, M2, 2022) 256GB</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">MacBook Pro 13 inci lebih andal dari sebelumnya. Bertenaga super berkat chip M2 generasi berikutnya, MacBook Pro ini merupakan laptop pro Apple yang paling portabel, dengan kekuatan baterai hingga 20 jam (2)</p>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                            <li className="py-3 sm:py-4">
                                <div className="flex items-center">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Brand
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Apple
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li className="py-3 sm:py-4">
                                <div className="flex items-center">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Category
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Laptop
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li className="py-3 sm:py-4">
                                <div className="flex items-center">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            Stock Total (20)
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            silver (10), gray (5), navy (5)
                                        </p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4 bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="p-4 flex justify-between bg-white dark:bg-gray-900">
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaSearch />
                            </div>
                            <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                        </div>

                        <button data-modal-target="addEditModal" data-modal-toggle="addEditModal" type="button" className="flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md text-gray-50 bg-indigo-700 border-t border-b border-gray-200 hover:bg-indigo-800">
                            <FaPlus className='mr-2' /> Add Stock
                        </button>
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
                                Serial Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
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
                                PMBPRO-M1-256GB-SILVER-0001
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Warehouse 1
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ready
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">

                                    <button data-modal-target="addEditModal" data-modal-toggle="addEditModal" type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600 rounded-l-md">
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
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                PMBPRO-M1-256GB-SILVER-0002
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Warehouse 1
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ready
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">

                                    <button data-modal-target="addEditModal" data-modal-toggle="addEditModal" type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600 rounded-l-md">
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
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                PMBPRO-M1-256GB-SILVER-0003
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Warehouse 1
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ready
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">

                                    <button data-modal-target="addEditModal" data-modal-toggle="addEditModal" type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600 rounded-l-md">
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
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                PMBPRO-M1-256GB-SILVER-0004
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Warehouse 1
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ready
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">

                                    <button data-modal-target="addEditModal" data-modal-toggle="addEditModal" type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600 rounded-l-md">
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
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                PMBPRO-M1-256GB-SILVER-0005
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Warehouse 1
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ready
                            </td>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">

                                    <button data-modal-target="addEditModal" data-modal-toggle="addEditModal" type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600 rounded-l-md">
                                        <FaPencil />
                                    </button>
                                    <button data-modal-target="deleteModal" data-modal-toggle="deleteModal" type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <nav className="flex items-center justify-between p-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-5</span> of <span className="font-semibold text-gray-900 dark:text-white">20</span></span>
                    <ul className="inline-flex -space-x-px text-sm h-8">
                        <li >
                            {
                                parseInt(param?.page) > 1 ?
                                    (
                                        <Link to={pathname.replace(`/${param?.page}`, '') + "/" + (parseInt(param?.page) - 1).toString()} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
                                    )
                                    :
                                    (
                                        <Link to="#" className="pointer-events-none flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>

                                    )
                            }
                        </li>
                        {
                            Array(5).fill().map((_, k) => {
                                const linkTo = pathname.replace(`/${param?.page}`, '') + "/" + (k + 1).toString()
                                // console.log(linkTo)
                                return (<li key={k}>
                                    <Link to={linkTo} className={param?.page === (k + 1).toString() ? "flex items-center justify-center px-3 h-8 leading-tight text-blue-700 bg-blue-700/20 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>{k + 1}</Link>
                                </li>)
                            })
                        }
                        <li>
                            {
                                parseInt(param?.page) < 5 ?
                                    (
                                        <Link to={pathname.replace(`/${param?.page}`, '') + "/" + (parseInt(param?.page) + 1).toString()} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
                                    )
                                    :
                                    (
                                        <Link to="#" className="pointer-events-none flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>

                                    )
                            }
                        </li>
                    </ul>
                </nav>
            </div>
            <AddEditModal />
            <DelModal />
        </div>
    )
}

export default ProductDetail
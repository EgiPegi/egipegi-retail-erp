import React from 'react'
import { FaListAlt, FaPlus, FaSearch, FaTrash } from 'react-icons/fa'
import { FaPencil, FaX } from 'react-icons/fa6'
import DelModal from './DelModal'
import AddEditModal from './AddEditModal'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const Categories = () => {
    const navigate = useNavigate()
    let param = useParams();
    let { pathname } = useLocation();
    const getPath = () => {
        if (param.page) return pathname.slice(0, pathname.lastIndexOf('/'))
        return pathname
    }
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4 flex justify-between bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaSearch />
                        </div>
                        <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for category" />
                    </div>
                    <button data-modal-target="addEditModal" data-modal-toggle="addEditModal" type="button" className="flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md text-gray-50 bg-indigo-700 border-t border-b border-gray-200 hover:bg-indigo-800">
                        <FaPlus className='mr-2' /> Add Category
                    </button>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                {/* <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div> */}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category Name
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
                                Laptop
                            </th>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button onClick={() => navigate(getPath() + '/ashjasljafjhafaf8afaf8yad/1')} type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button data-modal-target="addEditModal" data-modal-toggle="addEditModal" type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
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
                                Tablet
                            </th>
                            <td className="px-1 py-4 w-36">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button onClick={() => navigate(getPath() + '/ashjasljafjhafaf8afaf8yad/1')} type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                        <FaListAlt />
                                    </button>
                                    <button data-modal-target="addEditModal" data-modal-toggle="addEditModal" type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
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
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
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
        </>
    )
}
export default Categories
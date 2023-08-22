import React, { useEffect, useState } from 'react'
import { FaListAlt, FaPlus, FaSearch, FaTrash } from 'react-icons/fa'
import { FaPencil, FaX } from 'react-icons/fa6'
import DelModal from './DelModal'
import AddEditModal from './AddEditModal'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { alertService, inventoryService } from '../../../_services'
import { ImSpinner10 } from 'react-icons/im'

const Brands = () => {
    const navigate = useNavigate()
    let param = useParams();
    let { pathname } = useLocation();
    const getPath = () => {
        if (param.page) return pathname.slice(0, pathname.lastIndexOf('/'))
        return pathname
    }

    const [datas, setDatas] = useState(null)
    const [prepDel, setPrepDel] = useState({ isShown: false, data: null })
    const [prepAddEdit, setPrepAddEdit] = useState({ isShown: false, isUpdate: false, data: null })
    const [Page, setPage] = useState(null)

    useEffect(() => {
        if (!param.page) {
            setPage(1)
        } else {
            setPage(parseInt(param.page))
        }
    }, [param])


    useEffect(() => {
        if (!prepAddEdit.isShown) {
            inventoryService.getAllBrands().then(x => {
                setDatas(x)
            });
        }
    }, [prepAddEdit.isShown]);

    function deleteData(id) {
        if (id) {
            setDatas(datas.map(x => {
                if (x.id === id) { x.isDeleting = true; }
                return x;
            }));
            inventoryService.deleteBrand(id).then(() => {
                setDatas(datas => datas.filter(x => x.id !== id));
            });
            alertService.success('Delete successfully', { keepAfterRouteChange: true });
        }
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
                        <input type="text" id="table-search" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                    </div>
                    <button onClick={() => setPrepAddEdit({ isShown: true, isUpdate: false, data: null })} type="button" className="flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md text-gray-50 bg-indigo-700 border-t border-b border-gray-200 hover:bg-indigo-800">
                        <FaPlus className='mr-2' /> Add Distributors
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
                                Brand Name
                            </th>
                            <th scope="col" className="px-1 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas && datas.map((d, k) =>
                                <tr key={k} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id={d.id} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => console.log(e.currentTarget.id)} />
                                            <label htmlFor={d.id} className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {d.name}
                                    </th>
                                    <td className="px-1 py-4 w-36">
                                        <div className="inline-flex rounded-md shadow-sm" role="group">
                                            <button onClick={() => navigate(getPath() + '/' + d.id + '/1')} type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-indigo-700 border border-gray-200 rounded-l-lg hover:bg-indigo-800">
                                                <FaListAlt />
                                            </button>
                                            <button onClick={() => setPrepAddEdit({ isShown: true, data: d, isUpdate: true })} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-amber-500 border-t border-b border-gray-200 hover:bg-amber-600">
                                                <FaPencil />
                                            </button>
                                            <button onClick={() => setPrepDel({ isShown: true, data: d })} type="button" className="px-4 py-2 text-sm font-medium text-gray-50 bg-rose-700 border border-gray-200 rounded-r-md hover:bg-rose-900">
                                                <FaTrash />
                                            </button>

                                        </div>
                                    </td>

                                </tr>
                            )
                        }


                        {
                            !datas && <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td colSpan={3} className='p-5 text-center'>
                                    <ImSpinner10 className='text-center w-full animate-spin text-indigo-700 text-2xl' />
                                </td>

                            </tr>
                        }

                    </tbody>
                </table>
                <nav className="flex items-center justify-between p-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul className="inline-flex -space-x-px text-sm h-8">
                        <li >
                            {
                                Page > 1 ?
                                    (
                                        <Link to={pathname.replace(`/${Page}`, '') + "/" + (Page - 1).toString()} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
                                    )
                                    :
                                    (
                                        <Link to="#" className="pointer-events-none flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>

                                    )
                            }
                        </li>
                        {
                            Array(5).fill().map((_, k) => {
                                const linkTo = pathname.replace(`/${Page}`, '') + "/" + (k + 1).toString()
                                // console.log(linkTo)
                                return (<li key={k}>
                                    <Link to={linkTo} className={Page === k + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-blue-700 bg-blue-700/20 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>{k + 1}</Link>
                                </li>)
                            })
                        }
                        <li>
                            {
                                Page < 5 ?
                                    (
                                        <Link to={pathname.replace(`/${Page}`, '') + "/" + (Page + 1).toString()} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
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

            <AddEditModal Action={setPrepAddEdit} {...prepAddEdit} />
            <DelModal Action={setPrepDel} deleteData={deleteData}  {...prepDel} />
        </>
    )
}
export default Brands
import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6'
import { alertService, inventoryService } from '../../../_services';
import { ImSpinner10 } from 'react-icons/im';

const AddEditModal = ({ isShown = false, isUpdate = false, data, Action }) => {
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e) {
        setIsLoading(true)
        e.preventDefault()
        alertService.clear();
        const name = e.target['name'].value
        const description = e.target['description'].value
        const payload = { name, description }
        console.log(payload)
        if (isUpdate) {
            updateData(data.id, payload);
        } else {
            createData(payload);
        }
    }

    function createData(fields) {
        inventoryService.createCategory(fields)
            .then(() => {
                alertService.success('Added successfully', { keepAfterRouteChange: true });
                setIsLoading(false)
                Action({ isShown: false, isUpdate, data })
                // history.push('.');
            })
            .catch(error => {
                alertService.error(error);
            });
    }

    function updateData(id, fields) {
        inventoryService.updateCategory(id, fields)
            .then(() => {
                alertService.success('Update successful', { keepAfterRouteChange: true });
                setIsLoading(false)
                Action({ isShown: false, isUpdate, data })
                // history.push('..');
            })
            .catch(error => {
                alertService.error(error);
            });
    }
    if (isShown) return (
        <>{/* <!-- Main modal --> */}
            <div id="addEditModal" className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-slate-700/40 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen flex justify-center items-center">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <form onSubmit={onSubmit} >
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {isUpdate ? "Edit " : "Add "}  {data?.name}
                                </h3>
                                <button onClick={() => Action({ isShown: false, isUpdate, data })} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                    <FaX />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="p-6 space-y-6">

                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={data?.name} required />
                                    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category Name</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="text" name="description" id="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={data?.description} required />
                                    <label htmlFor="floating_address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                                </div>


                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="flex items-center justify-end p-6 space-x-2  border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button type="reset" className="text-gray-800 bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={() => console.log('halo')}>Reset</button>
                                <button disabled={isLoading} type="submit" className="text-white bg-indigo-700 disabled:bg-slate-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex">
                                    {
                                        isLoading && <ImSpinner10 size={18} className='animate-spin mr-2 ml-0' />
                                    }
                                    Submit</button>
                                <button onClick={() => Action({ isShown: false, isUpdate, data })} type="reset" className="text-gray-50 bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div ></>
    )
}

export default AddEditModal
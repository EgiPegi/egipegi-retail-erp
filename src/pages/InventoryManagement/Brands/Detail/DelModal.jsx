import React from 'react'
import { FaX } from 'react-icons/fa6'

const DelModal = () => {
    return (
        <>{/* <!-- Main modal --> */}
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
            </div></>
    )
}

export default DelModal
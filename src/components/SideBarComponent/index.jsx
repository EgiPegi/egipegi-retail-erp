import React from 'react'
import { HiArchive, HiArrowDown, HiArrowSmRight, HiBadgeCheck, HiChartPie, HiCheck, HiCheckCircle, HiChevronDown, HiCollection, HiInbox, HiMenu, HiMenuAlt2, HiOutlineShoppingCart, HiShoppingBag, HiShoppingCart, HiTable, HiUser, HiUserGroup, HiViewBoards, HiViewGrid, HiViewList } from 'react-icons/hi';
import { FaCartArrowDown, FaCartPlus, FaHandshake, FaMoneyCheckAlt, FaPeopleArrows, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';
import { FaBuildingCircleCheck } from 'react-icons/fa6';
import { TopBarComponent } from '../TopBarComponent';
import { NavLink } from 'react-router-dom';

const SideBarComponent = () => {
    return (
        <>
            <TopBarComponent />
            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white bg-gradient-to-b from-indigo-800 from-10% via-blue-800 via-50% to-sky-700 to-90% border-r border-gray-200 sm:translate-x-0 dark:from-indigo-950 dark:via-blue-950 dark:to-teal-700 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "flex items-center p-2 text-slate-300 bg-indigo-200/30 rounded-lg dark:text-white hover:bg-gray-100/20 dark:hover:bg-gray-700 group" : "flex items-center p-2 text-slate-300 rounded-lg dark:text-white hover:bg-gray-100/20 dark:hover:bg-gray-700 group"}>
                                <HiChartPie size={26} className=" text-slate-300 transition duration-75 dark:text-gray-400 group-hover:text-slate-300 dark:group-hover:text-white" />
                                <span className="ml-3">Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-slate-300 transition duration-75 rounded-lg group hover:bg-gray-100/20 dark:text-white dark:hover:bg-gray-700" aria-controls="inventory" data-collapse-toggle="inventory">
                                <HiArchive size={26} className=" text-slate-300 transition duration-75 dark:text-gray-400 group-hover:text-slate-300 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Inventory</span>
                                <HiChevronDown />
                            </button>
                            <ul id="inventory" className='hidden py-2 space-y-2'>
                                <li>
                                    <NavLink to="inventory/brands" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Brands</NavLink>
                                </li>
                                <li>
                                    <NavLink to="inventory/categories" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Caregories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="inventory/products" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Products</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-slate-300 transition duration-75 rounded-lg group hover:bg-gray-100/20 dark:text-white dark:hover:bg-gray-700" aria-controls="pos" data-collapse-toggle="pos">
                                <FaShoppingBasket size={26} className=" text-slate-300 transition duration-75 dark:text-gray-400 group-hover:text-slate-300 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Point Of Sale</span>
                                <HiChevronDown />
                            </button>
                            <ul id="pos" className="hidden py-2 space-y-2">
                                <li>
                                    <NavLink to="pos/sales" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="pos/refunds" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Refunds</NavLink>
                                </li>
                                <li>
                                    <NavLink to="pos/shippings" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Shippings</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-slate-300 transition duration-75 rounded-lg group hover:bg-gray-100/20 dark:text-white dark:hover:bg-gray-700" aria-controls="purchasing" data-collapse-toggle="purchasing">
                                <FaCartArrowDown size={26} className=" text-slate-300 transition duration-75 dark:text-gray-400 group-hover:text-slate-300 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Purchasing</span>
                                <HiChevronDown />
                            </button>
                            <ul id="purchasing" className='hidden py-2 space-y-2'>
                                <li>
                                    <NavLink to="sales" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="refunds" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Refunds</NavLink>
                                </li>
                                <li>
                                    <NavLink to="shippings" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Shippings</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-slate-300 transition duration-75 rounded-lg group hover:bg-gray-100/20 dark:text-white dark:hover:bg-gray-700" aria-controls="customers" data-collapse-toggle="customers">
                                <FaHandshake size={26} className=" text-slate-300 transition duration-75 dark:text-gray-400 group-hover:text-slate-300 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Customers</span>
                                <HiChevronDown />
                            </button>
                            <ul id="customers" className='hidden py-2 space-y-2'>
                                <li>
                                    <NavLink to="sales" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="refunds" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Refunds</NavLink>
                                </li>
                                <li>
                                    <NavLink to="shippings" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Shippings</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-slate-300 transition duration-75 rounded-lg group hover:bg-gray-100/20 dark:text-white dark:hover:bg-gray-700" aria-controls="finance" data-collapse-toggle="finance">
                                <FaMoneyCheckAlt size={26} className=" text-slate-300 transition duration-75 dark:text-gray-400 group-hover:text-slate-300 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Finance</span>
                                <HiChevronDown />
                            </button>
                            <ul id="finance" className='hidden py-2 space-y-2'>
                                <li>
                                    <NavLink to="sales" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="refunds" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Refunds</NavLink>
                                </li>
                                <li>
                                    <NavLink to="shippings" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Shippings</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-slate-300 transition duration-75 rounded-lg group hover:bg-gray-100/20 dark:text-white dark:hover:bg-gray-700" aria-controls="marketing" data-collapse-toggle="marketing">
                                <HiBadgeCheck size={26} className=" text-slate-300 transition duration-75 dark:text-gray-400 group-hover:text-slate-300 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Marketing</span>
                                <HiChevronDown />
                            </button>
                            <ul id="marketing" className='hidden py-2 space-y-2'>
                                <li>
                                    <NavLink to="sales" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="refunds" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Refunds</NavLink>
                                </li>
                                <li>
                                    <NavLink to="shippings" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Shippings</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-slate-300 transition duration-75 rounded-lg group hover:bg-gray-100/20 dark:text-white dark:hover:bg-gray-700" aria-controls="hr" data-collapse-toggle="hr">
                                <FaPeopleArrows size={26} className=" text-slate-300 transition duration-75 dark:text-gray-400 group-hover:text-slate-300 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Human Resource</span>
                                <HiChevronDown />
                            </button>
                            <ul id="hr" className='hidden py-2 space-y-2'>
                                <li>
                                    <NavLink to="sales" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="refunds" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Refunds</NavLink>
                                </li>
                                <li>
                                    <NavLink to="shippings" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Shippings</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-slate-300 transition duration-75 rounded-lg group hover:bg-gray-100/20 dark:text-white dark:hover:bg-gray-700" aria-controls="operational" data-collapse-toggle="operational">
                                <FaBuildingCircleCheck size={26} className=" text-slate-300 transition duration-75 dark:text-gray-400 group-hover:text-slate-300 dark:group-hover:text-white" />
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Operational</span>
                                <HiChevronDown />
                            </button>
                            <ul id="operational" className='hidden py-2 space-y-2'>
                                <li>
                                    <NavLink to="sales" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="refunds" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Refunds</NavLink>
                                </li>
                                <li>
                                    <NavLink to="shippings" className={({ isActive }) => isActive ? "flex items-center w-full p-2 text-slate-300 bg-indigo-200/30 transition duration-75 rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-500" : "flex items-center w-full p-2 text-slate-300 transition duration-75 rounded-lg pl-11 group hover:bg-indigo-500/50 dark:text-white dark:hover:bg-gray-700"}>Shippings</NavLink>
                                </li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SideBarComponent
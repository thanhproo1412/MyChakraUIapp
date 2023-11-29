'use client'

import Image from 'next/image'
import Link from "next/link";
import styles from "./css/NavBarCss.module.css";
import { useState } from 'react';

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    return (

        <nav className={`${styles['navbar']} `}>
            <div className="container mx-auto flex justify-between items-center">

                <ul className="flex">
                    <Link href=""
                        className={styles['logo']}><Image src='/HTlogo.png' alt="me" width="150" height="40" />
                    </Link>
                    <Link href="about" className={` ${styles['active']} `}><span>Trang chủ</span></Link>

                    {/* dropdown */}
                    <div>
                        <button onClick={() => setIsOpen((prev) => !prev)} className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Tin tức <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg></button>
                        {isOpen && (
                            <div className={`bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${styles['dropdown-menu']}`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="tinvinfast" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tin VinFast</a>
                                    </li>
                                    <li>
                                        <a href="tincongdong" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tin Cộng Đồng</a>
                                    </li>
                                    <li>
                                        <a href="tindoisong" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Đời Sống</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <Link href="contact" className=""><span>Tin tức</span></Link>
                    <Link href="login" className=""><span>Diễn đàn</span></Link>
                    <Link href="signup" className=""><span>Sự kiện</span></Link>
                    <Link href="signup" className=""><span>Thư viện</span></Link>
                </ul>

                <ul className="flex justify-content: center items-center">

                    {/* search bar */}
                    <div className="flex items-center pr-4">
                        <form action="" className="relative mx-auto w-max flex">
                            <input type="search" className={`peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none ${styles['search-bar']} `} />
                            <svg xmlns="http://www.w3.org/2000/svg" className="  absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </form>
                    </div>
                    <div className={styles['search-separator']}></div>
                    <Link href="login" className={`p-2 ${styles['login-button']} `}><span>Đăng nhập</span></Link>
                    <Link href="signup" className={`p-2 ${styles['register-button']} `}><span>Đăng kí</span></Link>
                </ul>

            </div>
        </nav >

    )
}
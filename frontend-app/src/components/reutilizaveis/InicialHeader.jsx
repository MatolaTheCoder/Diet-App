import React from 'react'
import { Link } from 'react-router-dom'

export default function InicialHeader() {
    return (
        <div>
            <nav class="w-full bg-white dark:bg-slate-900">
                <div class="container mx-auto py-4 flex items-center justify-between">
                    <div class="flex flex-col items-center p-4">
                        <span class="font-nunito text-green-400 "><span className='text-xl font-medium'>Diet</span>-<span className='text-gray-400 text-lg'>App</span></span>
                    </div>
                    <div>
                        <ul class="hidden md:flex gap-8  font-semibold text-sm text-gray-600 dark:text-gray-200 underline">
                            <li class="hover:text-gray-800 dark:hover:text-white">
                                <Link to={'/register'}>Registe-se</Link>
                            </li>
                            <li class="hover:text-gray-800 pr-8 dark:hover:text-white"><Link to={'/login'}>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

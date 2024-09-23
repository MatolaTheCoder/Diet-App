import React from 'react'

export default function Welcome() {
    return (
        <div className='bg-emerald-50 h-svh'>
            <div className="">
                <nav class="w-full bg-white dark:bg-slate-900">
                    <div class="container mx-auto py-4 flex items-center justify-between">
                        <div class="flex flex-col items-center p-4">
                                <span class="font-nunito text-green-400">Diet-<span className='text-gray-400'>App</span></span>
                        </div>
                        <div>
                            <ul class="hidden md:flex gap-8  font-semibold text-sm text-gray-600 underline">
                                <li class="hover:text-gray-800">Registe-se</li>
                                <li class="hover:text-gray-800 pr-8">Login</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="flex justify-center">
                <div className="pt-24 pr-8">
                    <div className="pt-6 ">
                        <p className='text-2xl font-semibold text-gray-700'>Bem vindo a nossa <br /> <span className='text-3xl font-bold text-emerald-500'>Aplicacao de Dieta</span></p><br />

                    </div>
                </div>
                <div className="pt-24 pl-12">
                    <img src="diet.svg" className='w-96 h-96' alt="diet" />
                </div>
            </div>
        </div>
    )
}

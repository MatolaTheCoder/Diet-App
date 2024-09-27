import React from 'react'
import InicialHeader from './reutilizaveis/InicialHeader'
import InputField from './reutilizaveis/InputField'

export default function Home() {
    return (
        <div>
            <div className="">
            <nav class="w-full bg-white shadow">
                <div class="container max-w-7xl mx-auto py-4 flex items-center justify-between">
                    <div class="flex flex-col items-center py-4">
                        <span class="font-nunito text-green-400 "><span className='text-xl font-medium'>Diet</span>-<span className='text-gray-400 text-lg'>App</span></span>
                    </div>
                    <div>
                        <p className="text-emerald-500 ">Bem-Vindo</p>
                    </div>
                </div>
            </nav>
            </div>
            <div className="bg-neutral-50 w-full h-full">
                <div className="mt-3 max-w-7xl mx-auto font-semibold text-2xl p-6 text-gray-600">
                    | Pagina Inicial
                </div>
                <div className="mt-10">
                    <div className="bg-white max-w-7xl mx-auto p-5 shadow rounded-r-lg">
                        <form action="">
                            <div className="w-full flex flex-col justify-center ">
                                <h2 className="text-2xl text-center text-gray-600 font-semibold mb-6">Dados</h2>
                                <div className="flex justify-center flex-row gap-8">
                                    <div className="">
                                        <InputField label={'Idade'} name={'idade'} onChange={''} />
                                        <InputField label={'Peso'} name={'peso'}  onChange={''} />
                                        <InputField label={'Altura'} name={'altura'} onChange={''} />
                                    </div>
                                    <div className="">
                                        <InputField label={'Objectivos'} name={'objectivos'} onChange={''} />
                                        <InputField label={'Restricoes'} name={'restricoes'} onChange={''} />
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <button className="bg-emerald-300 text-gray-600 px-6 py-2 rounded-full font-semibold hover:bg-emerald-400">
                                        Registar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

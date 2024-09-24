import React from 'react'
import InicialHeader from './reutilizaveis/InicialHeader'

export default function Welcome() {
    return (
        <div className='bg-emerald-50 h-svh'>
            <div className="">
                <InicialHeader/>
            </div>
            <div className="flex justify-center">
                <div className="pt-24 pr-8">
                    <div className="pt-6 ">
                        <p className='text-2xl font-semibold text-gray-700'>Bem vindo a nossa <br /> 
                        <span className='text-3xl font-bold text-emerald-500'>Aplicacao de Dieta <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span></span></p>
                    </div>
                </div>
                <div className="pt-24 pl-12">
                    <img src="diet.svg" className='w-96 h-96' alt="diet" />
                </div>
            </div>
        </div>
    )
}

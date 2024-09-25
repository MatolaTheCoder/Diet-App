import React from 'react'
import InputField from '../reutilizaveis/InputField'
import InicialHeader from '../reutilizaveis/InicialHeader'


export default function Login() {
    return (
        <div>
            <div className="shadow">
                <InicialHeader />
            </div>
            <div className=" flex justify-center items-center w-full h-full ">
                <div className="mt-12 p-8 shadow shadow-emerald-50 rounded-tr-lg">
                    <div className="my-5 flex justify-center">
                        <div className="text-emerald-500 text-xl font-medium">Registe-se</div>
                    </div>
                    <form action="">
                        <div className="flex flex-col gap-4">
                            <InputField label={'Email'} name={'email'} value={''} onChange={''} />
                            <InputField label={'Senha'} name={'senha'} value={''} onChange={''} />
                        </div>
                        <p className='w-full mt-1.5'>
                            <span className='text-blue-500 text-sm text-right'>Clique aqui para recuperar a senha</span>
                        </p>
                        <div className="flex justify-center mt-4 w-full">
                            <button className="p-1.5 w-4/5 bg-emerald-100 text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-emerald-200"> Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

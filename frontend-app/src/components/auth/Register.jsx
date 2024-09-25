import React from 'react';
import InicialHeader from '../reutilizaveis/InicialHeader';
import InputField from '../reutilizaveis/InputField';

export default function Register() {
  return (
    <div>
      <div className="shadow">
        <InicialHeader />
      </div>
      <div className="flex justify-center items-center w-full pt-5">
        <div className="bg-white shadow-lg rounded-lg w-3/4 max-w-6xl grid grid-cols-2">
          <div className="p-8">
            <h2 className="text-emerald-600 text-2xl font-semibold mb-6 radius-tr">Informacao Geral</h2>
            <InputField label={'Nome'} name={'nome'} value={''} onChange={''} />
            <InputField label={'Email'} name={'email'} value={''} onChange={''} />
            <InputField label={'Senha'} name={'senha'} value={''} onChange={''} />
            <InputField label={'Confirmar Senha'} name={'conf_senha'} value={''} onChange={''} />
          </div>

          {/* Contact Details Section */}
          <div className="bg-emerald-600/30 text-white p-8 rounded-r-lg">
            <h2 className="text-2xl font-semibold mb-6">Dados</h2>
            <InputField label={'Idade'} name={'idade'} value={''} onChange={''} />
            <InputField label={'Peso'} name={'peso'} value={''} onChange={''} />
            <InputField label={'Altura'} name={'altura'} value={''} onChange={''} />
            <InputField label={'Objectivos'} name={'objectivos'} value={''} onChange={''} />
            <InputField label={'Restricoes'} name={'restricoes'} value={''} onChange={''} />
            {/* Terms and Conditions */}
            <div className="mt-4">
              <p className="inline-flex items-center">
                Já tem conta? <span className='text-blue-500 ml-1.5'> Faça o login</span>
              </p>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
                Registar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

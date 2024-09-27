import React from 'react';
import InicialHeader from '../reutilizaveis/InicialHeader';
import InputField from '../reutilizaveis/InputField';

export default function Register() {
  const objjectivos = [
    { id: 1, descricao: 'Perder peso' },
    { id: 2, descricao: 'Ganhar massa muscular' },
    { id: 3, descricao: 'Manter o peso' },
  ];

  const restricoes = [
    { id: 1, descricao: 'Nenhuma' },
    { id: 2, descricao: 'Intolerância à lactose' },
    { id: 3, descricao: 'Mariscos' },
  ];

  return (
    <div>
      <div className="shadow">
        <InicialHeader />
      </div>
      <div className="flex justify-center items-center w-full pt-5">
        <form action="">

          <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2">
            {/* Informação Geral */}
            <div className="p-8">
              <h2 className="text-emerald-600 text-2xl font-semibold mb-6">Informação Geral</h2>
              <InputField label={'Nome'} name={'nome'} onChange={''} />
              <InputField label={'Email'} name={'email'} onChange={''} />
              <InputField label={'Senha'} name={'senha'} onChange={''} />
              <InputField label={'Confirmar Senha'} name={'conf_senha'} onChange={''} />
            </div>

            {/* Dados Section */}
            <div className="bg-emerald-600/30 text-white p-8 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
              <h2 className="text-2xl font-semibold mb-6">Dados</h2>
              <InputField label={'Idade'} name={'idade'} onChange={''} />
              <InputField label={'Peso'} name={'peso'} onChange={''} />
              <InputField label={'Altura'} name={'altura'} onChange={''} />

              {/* Select for Objectivos */}
              <div className="w-full mb-3">
                <label htmlFor={'objectivos'} className="block text-md text-gray-800">Objetivos:</label>
                <select
                  name={'objectivos'}
                  id={'objectivos'}
                  className="w-64 bg-gray-100 border border-gray-200 text-gray-700 rounded shadow-md px-3 py-1.5 focus:outline-none focus:border-blue-200"
                >
                  <option value="">--- Selecione ---</option>
                  {objjectivos.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.descricao}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full mb-3">
                <label htmlFor={'restricoes'} className="block text-md text-gray-800">Restrições:</label>
                <select
                  name={'restricoes'}
                  id={'restricoes'}
                  className="w-64 bg-gray-100 border text-gray-700 border-gray-200 rounded shadow-md px-3 py-1.5 focus:outline-none focus:border-blue-200"
                >
                  <option value="">--- Selecione ---</option>
                  {restricoes.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.descricao}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <p className="inline-flex items-center">
                  Já tem conta? <span className='text-blue-500 ml-1.5'>Faça o login</span>
                </p>
              </div>
              <div className="mt-6">
                <button className="bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
                  Registar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

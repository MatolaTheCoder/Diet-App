import React from 'react';

export default function TipoRefeicao({ title }) {
    return (
      <div className="w-full my-2 p-4 mt-4 mb-8 flex justify-center bg-white rounded-md shadow-sm">
        <h1 className="text-xl font-semibold font-nunito text-green-400">{title}</h1>
      </div>
    );
}

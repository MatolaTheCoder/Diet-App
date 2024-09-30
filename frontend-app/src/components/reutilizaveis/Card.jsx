import React from 'react';

export default function Card({ title, image, description, calories }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white " >
            {/* Imagem do card */}
            <img className="w-full h-48 object-cover" src={image} alt={title} />

            <div className="px-6 py-4">
                {/* Título da refeição */}
                <div className="font-bold text-xl mb-2 text-emerald-600">{title}</div>

                {/* Descrição da refeição */}
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>

            {/* Informações adicionais */}
            <div className="px-6 py-4 flex justify-between items-center">
                <span className="text-gray-600 text-sm">Calorias: {calories}</span>
                <button className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm hover:bg-emerald-600">
                    Ver Detalhes
                </button>
            </div>
        </div>
    );
}

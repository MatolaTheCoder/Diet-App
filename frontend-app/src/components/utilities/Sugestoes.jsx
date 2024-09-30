// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "./Header.jsx";
import Card from "../reutilizaveis/Card.jsx";
export default function SuggestionList() {



    // const suggestions = [
    //     {
    //         title: 'Salada de Frango',
    //         image: 'https://via.placeholder.com/400x300.png?text=Salada+de+Frango',
    //         description: 'Uma deliciosa salada de frango com alface, tomates e molho leve.',
    //         calories: 350
    //     },
    //     {
    //         title: 'Smoothie de Morango',
    //         image: 'https://via.placeholder.com/400x300.png?text=Smoothie+de+Morango',
    //         description: 'Bebida refrescante de morango com iogurte natural.',
    //         calories: 150
    //     },
    //     {
    //         title: 'Tacos de Peixe',
    //         image: 'https://via.placeholder.com/400x300.png?text=Tacos+de+Peixe',
    //         description: 'Tacos saudáveis recheados com peixe grelhado e vegetais frescos.',
    //         calories: 450
    //     },
    //     {
    //         title: 'Tacos de Peixe',
    //         image: 'https://via.placeholder.com/400x300.png?text=Tacos+de+Peixe',
    //         description: 'Tacos saudáveis recheados com peixe grelhado e vegetais frescos.',
    //         calories: 450
    //     },
    //     {
    //         title: 'Tacos de Peixe',
    //         image: 'https://via.placeholder.com/400x300.png?text=Tacos+de+Peixe',
    //         description: 'Tacos saudáveis recheados com peixe grelhado e vegetais frescos.',
    //         calories: 450
    //     }
    // ];

    return (
        <div>
            <div className="w-full fixed top-0 left-0">
                <Header/>

            </div>

            <div className="mt-32"><h1 className="text-3xl text-center">Sugestões</h1></div>

            <div className="flex justify-center items-center min-h-screen bg-gray-100 ">


                <div className="container mx-auto py-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {suggestions.map((meal, index) => (
                        <Card
                            key={index}
                            title={meal.title}
                            image={meal.image}
                            description={meal.description}
                            calories={meal.calories}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

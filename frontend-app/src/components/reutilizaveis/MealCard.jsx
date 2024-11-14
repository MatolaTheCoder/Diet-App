import React from 'react' 
import Header from '../utilities/Header' 

function Card({  nome,  imagem,  descricao,  taxa_calorifica }) {
    return (
        <div className="bg-white shadow-xl hover:shadow-2xl rounded-tl-md rounded-br-md  p-4 w-60 hover:w-64 text-center">
            <h3 className="text-lg font-semibold mb-2">{ nome}</h3>
            <div className="w-full h-auto bg-gray-200 mb-2 flex items-center justify-center"> 
                {<img src={ imagem} alt={ nome} className="h-full" />}
            </div>
            <p className="text-sm h-32 text-gray-600">{ descricao}</p> {/*  qualquer cena deixa h-auto*/}
            <p className="text-sm font-semibold text-gray-800 mt-2">{ taxa_calorifica} calorias</p>
        </div>
    ) 
}

export default function MealCard() {
    const meals = [
        {  nome: 'Ovos',  imagem: 'https://th.bing.com/th/id/R.fe3b3eaab0e8db58f68670c357613a8b?rik=ATKwVcnqCPMrhA&pid=ImgRaw&r=0',  descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus magni, magnam earum quod expedita velit!',  taxa_calorifica: 250 },
        {  nome: 'Pao',  imagem: 'https://th.bing.com/th/id/R.fe3b3eaab0e8db58f68670c357613a8b?rik=ATKwVcnqCPMrhA&pid=ImgRaw&r=0',  descricao: 'Pao manteiga',  taxa_calorifica: 200 },
        {  nome: 'badiga',  imagem: 'https://th.bing.com/th/id/R.fe3b3eaab0e8db58f68670c357613a8b?rik=ATKwVcnqCPMrhA&pid=ImgRaw&r=0',  descricao: 'pao na badgia',  taxa_calorifica: 300 },
    ] 

    return (
        <div >
            <div className="w-full fixed top-0 left-0">
                <Header />
            </div>
            <div className="mt-32">
                <h1 className="text-3xl text-center">Refeicao</h1>
            </div>
            <div className=" mx-auto mt-10 max-w-5xl grid  grid-cols-3 gap-4">
                {meals.map((meal, index) => (
                    <Card
                        key={index}
                         nome={meal. nome}
                         imagem={meal. imagem}
                         descricao={meal. descricao}
                         taxa_calorifica={meal. taxa_calorifica}
                    />
                ))}
            </div>
        </div >

    ) 
}

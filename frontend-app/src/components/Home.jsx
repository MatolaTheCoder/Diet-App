import React from 'react';

export default function Home() {
    const dados = 'Dieta';
    const orientacao = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam autem laborum repellat, eius a illum debitis et numquam cupiditate quam cumque, delectus excepturi ut placeat dolore, nemo quae quaerat quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, impedit nesciunt! Ipsum ipsam eos corporis molestiae, quam voluptatem earum minus quod amet, veritatis aut quasi rerum alias excepturi quis eum.';

    return (
        <div>
            <div className="">
                <nav className="w-full bg-white shadow">
                    <div className="container max-w-7xl mx-auto py-4 flex items-center justify-between">
                        <div className="flex flex-col items-center py-4">
                            <span className="font-nunito text-green-400">
                                <span className='text-xl font-medium'>Diet</span>-<span className='text-gray-400 text-lg'>App</span>
                            </span>
                        </div>
                        <div>
                            <p className="text-emerald-500 ">Bem-Vindo</p>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="bg-neutral-50 w-full min-h-screen">
                <div className="mt-3 max-w-7xl mx-auto font-semibold text-2xl p-6 text-gray-600">
                    | Pagina Inicial
                </div>
                <div className="mt-10">
                    <div className=" max-w-5xl mx-auto p-5 rounded-lg">
                            <div className="w-full flex flex-col justify-center ">
                                <h2 className="text-2xl text-center text-gray-700 font-semibold mb-6">{dados}</h2>
                                <div className="bg-gray-50 p-6 shadow-md rounded-md mb-6">
                                    <h3 className="text-xl text-gray-700 font-semibold mb-3">Sobre a {dados}</h3>
                                    <p className="text-gray-500">{orientacao}</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

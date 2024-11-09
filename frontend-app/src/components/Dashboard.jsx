import React from 'react';
import Header from "./utilities/Header.jsx";



export default function Dashboard(){

        window.location.href = '/informacoes';

    return (
        <div>
            <div className="shadow">
               <Header/>
            </div>


        </div>
    );
}
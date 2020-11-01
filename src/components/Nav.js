import React from 'react'

export const Nav = () => {
    return (
        <div className="container mx-auto flex">
            <div className="w-1/3">
                <img className="w-6/12" src={require("../assets/img/logo.png")} alt="logo" />
            </div>
            <div className="w-2/3 flex justify-end items-center ">
                <ol className="ml-5 flex" >
                    <li className="ml-4 p-4  text-xl">Inicio</li>
                    <li className="ml-4 p-4  text-xl">Card</li>
                    <li className="bg-blue-500 ml-4 p-4 text-xl rounded-full text-white hover:bg-blue-700">Fomulario</li>
                </ol>
            </div>
        </div>
    )
}

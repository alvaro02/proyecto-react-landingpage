import React from 'react'

export const Nav = () => {
    return (
        <div className="container">
            <div>
                <img src={require("../assets/img/logo.png")} alt="logo" />
            </div>
            <div>
                <ol>
                    <li>Inicio</li>
                    <li>Card</li>
                    <li>Fomulario</li>
                </ol>
            </div>
        </div>
    )
}

import React from 'react'
import Slider  from './components/Slider';
import { Nav } from './components/Nav';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { Footer } from './components/Footer';

const App = () => {
    return (
        <div>
            <Nav />
            <Slider />
            <div className="my-5 flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
            </div>
            <div className=" text-4xl w-full mb-10 flex justify-center">Formulario</div>
            <Form />
            <Footer />
        </div>
    )
}

export default App

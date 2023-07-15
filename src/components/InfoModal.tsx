import React from 'react';

const InfoModal = ({ hideModal }: Props) => {
    return (
        <div className="fixed z-10 top-0 bottom-0 left-0 right-0 m-auto flex justify-center align-center flex-col  max-w-xs max-h-max p-2 rounded-md border-solid border border-[#939B9F] bg-[#262B3C] lg:min-w-[500px]  transition-all  ">
            <div className="lg:p-5">
                <h1 className="pb-10 text-center">Como Jugar</h1>
                <div className="pb-5">
                    <p className="pb-5">
                        Adivina la palabra oculta en cinco intentos.
                    </p>
                    <p className="pb-5">     Cada intento debe ser una palabra válida de 5 letras.</p>
                    <p className="pb-5">
                        Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
                    </p>
                </div>
                <h3>Ejemplos:</h3>
                <div className="flex">
                    <div className=" border-solid border border-[#939B9F] flex justify-center items-center font-bold bg-[#6AAA64] w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">G</h3>
                    </div>
                    <div className=" border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">A</h3>
                    </div>
                    <div className=" border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">T</h3>
                    </div>
                    <div className=" border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">O</h3>
                    </div>
                    <div className=" border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">S</h3>
                    </div>
                </div>

                    
                <p>La letra <b>G</b> está en la palabra y en la posición correcta.</p>
                <div className="flex">
                    <div className="border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">V</h3>
                    </div>
                    <div className="border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">O</h3>
                    </div>
                    <div className="border-solid border border-[#939B9F] flex justify-center items-center font-bold bg-[#CEB02C]  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">C</h3>
                    </div>
                    <div className="border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">A</h3>
                    </div>
                    <div className="border-solid border border-[#939B9F] flex justify-center items-center font-bold   w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">L</h3>
                    </div>
                </div>
                
                <p>La letra <b>C</b> está en la palabra pero en la posición incorrecta.</p>
                <div className="flex">
                    <div className="border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">C</h3>
                    </div>
                    <div className="border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">A</h3>
                    </div>
                    <div className="border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">N</h3>
                    </div>
                    <div className="border-solid border border-[#939B9F] flex justify-center items-center font-bold  w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">T</h3>
                    </div>
                    <div className="border-solid border border-[#939B9F] flex justify-center items-center font-bold bg-[#939B9F] w-[50px] h-[50px] mr-5 my-5">
                        <h3 className="red">O</h3>
                    </div>
                </div>
                <p className="pb-5">La letra <b>O</b> está en la palabra.</p>
                <p className="text-center">
                    ¡Una palabra nueva cada 5 minutos!
                </p>
                <button className="p-5 px-10 bg-[#6aaa64] h-[35px] flex justify-center items-center m-auto mt-10 rounded font-bold" onClick={hideModal}>¡JUGAR!</button>
            </div>

        </div>
    );
};

export default InfoModal;

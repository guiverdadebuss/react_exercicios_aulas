
import { useState } from "react";

export default function NumberGenerator() {
    const [randomNumber, setRandomNumber] = useState(0)

    const handleRandom = () => {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
       setRandomNumber(numeroAleatorio); 
    };

    

    return (
        <>
            <div>
                <h1>Gerador de Numeros</h1>
                <button onClick={handleRandom}>Gerar</button>
                <p>{randomNumber === 0 ? "Clique em Gerar" : randomNumber}</p>
            </div>
        </>
    );
}
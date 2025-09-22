import { useState } from "react";


export default function GeradordeNomes() {

    const Nomes = ["Guilherme", "Diego", "Bruna", "Victoria", "Leandro"];
    const Adjetivos = ["bonito(a)", "inteligente", "engraçado(a)"];

    const [randomNames, setRandomNames] = useState({
        name: "",
        adjective: ""
});

    const handleRandom = () => {
        const nomeAleatorio = Nomes[Math.floor(Math.random()*Nomes.length)];
        const adjetivosAleatorio = Adjetivos[Math.floor(Math.random()*Adjetivos.length)];
        setRandomNames({
            name: nomeAleatorio,
            adjective: adjetivosAleatorio,
        })
    };

    return (
        <div>
            <h1>Gerador de Nomes</h1>
            <button onClick={handleRandom}>Gerar</button>
            <p>{randomNames.name === "" ? "Clique em Gerar" : `${randomNames.name} ${randomNames.adjective}`}</p>
        </div>
    );
}
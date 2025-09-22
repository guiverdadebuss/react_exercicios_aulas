import { useState } from "react";

/*
export default function GeradorDeNomes() {

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
    */

export default function GeradorDeNomes() {
    const [nome, setNome] = useState("Clique em Gerar");

    const nomes = ["Leandro", "Paulo", "Miguel", "Gui", "Gabriel"];
    const adjetivos = ["Doido da Cabeça", "Esquecido", "Maluco", "Dorminhoco", "Festeiro"];

    const gerarNome = () => {
        const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)]; // nome aleatório do array
        const adjAleatorio = adjetivos[Math.floor(Math.random() * adjetivos.length)]; // adjetivo aleatório do array
        setNome(`${nomeAleatorio} ${adjAleatorio}`);
    };

    return (
        <div>
            <h3>Gerador de Nomes</h3>
            <p>{nome}</p>
            <button onClick={gerarNome}>Gerar</button>
        </div>
    );
}
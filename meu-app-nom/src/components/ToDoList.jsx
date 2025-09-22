import { useState } from 'react';

export default function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === '') return;
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa('');
    };

    const removerTarefa = (index) => {
        const novasTarefas = tarefas.filter((_, i) => i !== index);
        setTarefas(novasTarefas);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px' }}>
            <h2>Lista de Tarefas</h2>
            <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Digite uma nova tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index} style={{ marginTop: '8px' }}>
                        {tarefa}
                        <button
                            onClick={() => removerTarefa(index)}
                            style={{ marginLeft: '10px' }}
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

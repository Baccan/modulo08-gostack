import React, { useState } from 'react';

function App() {
  // Para cada estado temos um useState() separado e não um objeto único
  // Na primeira posição do array (tech) é o estado própriamente dito, e a segunda posição (setTech) é uma função para atualizar o estado
  const [tech, setTech] = useState([
    // Estado inicial de tech
    'ReactJS',
    'React Native',
  ]);

  const [newTech, setNewTech] = useState('');

  // this.setState atualizava todos os estados de uma vez. Neste caso utilizamos apenas uma função para um estado específico
  // Por continuar sendo imutável, é precisso copiar todas as informações autuais para atualizar (...tech)
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
        {/* <li>ReactJS</li>
      <li>React Native</li>
      <li>Node.js</li> */}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;

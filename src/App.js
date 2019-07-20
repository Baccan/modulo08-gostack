import React, { useState, useEffect } from 'react';

function App() {
  // Para cada estado temos um useState() separado e não um objeto único
  // Na primeira posição do array (tech) é o estado própriamente dito, e a segunda posição (setTech) é uma função para atualizar o estado
  const [tech, setTech] = useState([
    // Estado inicial de tech
    // 'ReactJS',
    // 'React Native',
  ]);

  const [newTech, setNewTech] = useState('');

  // useEffect() sobrepões componentDidMount(), componentDidUpdate(), componentWillUnmount()
  // O primeiro parametro é a função a ser executada e o segundo é quando será executada
  // Neste caso, não esta sendo monitorado nenhum estado ou variável, será execudado apenas uma vez
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    // componentWillUnmout()
    // return () => {
    //   document.removeEventListener()
    // }
  }, []);

  // neste caso, todas as vezes que o valor de tech for alterado, a função será executada
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

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

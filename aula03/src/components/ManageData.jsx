import { useState } from "react";

export const ManageData = () => {
  //variavel
  let valor = 10;
  //hook  - useState
  const [number, setNumber] = useState(20);
  return (
    <div>
      <div>
        {/* Não consegue alterar o valor de maneira dinamica */}
        <p>Valor: {valor}</p>
        <button onClick={() => (valor = 15)}>Mudar</button>
      </div>
      <div>
        <p>Valor dinâmico: {number}</p>
        {/* Mudar o valor de maneira dinamica usando hook */}
        <button onClick={() => setNumber(40)}>Mudar</button>
      </div>
    </div>
  );
};

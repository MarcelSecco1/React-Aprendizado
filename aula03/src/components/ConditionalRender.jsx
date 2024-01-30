import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [nome] = useState("Marcel");
  return (
    <div>
      <h2>Isso será exibido?</h2>
      {x && <h3>Sim</h3>}
      <div>
        <h2>If Ternário</h2>
        {nome === "Marcel" ? <h3>Olá, {nome}</h3> : <h3>Olá, desconhecido</h3>}
      </div>
    </div>
  );
};

export default ConditionalRender;

const Events = () => {
  // o e são os dados que o evento tem
  const meuEvento = (e) => {
    console.log(e);
    console.log("Meu evento foi executado!");
  };

  const rederizarh1 = (x) => {
    if (x) {
      return <h1>Esse é o meu evento renderizado</h1>;
    } else {
      return <h1>Esse é o meu segundo evento renderizado</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={meuEvento}>Clique Aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Função Simples!!")}>
          Clique Aqui também
        </button>

        <button
          onClick={() => {
            if (true) {
              console.log("Isso não vai ser exibido aq!!");
            }
          }}
        >
          Clique aqui por favor!!
        </button>
      </div>
      <div>{rederizarh1(true)}</div>
      <div>{rederizarh1(false)}</div>
    </div>
  );
};
export default Events;

import City from "./assets/city.jpg";
import "./App.css";
import { ManageData } from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunctions from "./components/ExecuteFunctions";
import { useState } from "react";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const cars = [
    { id: 1, marca: "BMW", km: 10000, cor: "Branco" },
    { id: 2, marca: "Fiat", km: 50000, cor: "Preto" },
    { id: 3, marca: "Ford", km: 30000, cor: "Vermelho" },
    { id: 4, marca: "Honda", km: 80000, cor: "Azul" },
  ];

  function showMessage() {
    alert("Alerta do component pai!!");
  }

  const [message, setMessage] = useState("");

  const handleShowMessage = (msg) => {
    alert(msg);
    setMessage(msg);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Avançando em React</h2>
        <div className="space">
          <img src={City} alt="logo" />
        </div>
        <div className="space">
          <img src="/img1.jpg" alt="logo" />
        </div>
        <div className="space">
          <ManageData />
        </div>
        <div className="space">
          <ListRender />
        </div>
        <div className="space">
          <ConditionalRender />
        </div>
        <div className="space">
          {/* Envia a variavel nome para o component renderizado PROPS*/}
          <ShowUserName nome="Marcel" />

          <CarDetails marca="BMW" km={10000} cor="Branco" />

          {cars.map((car) => {
            return (
              <CarDetails
                marca={car.marca}
                km={car.km}
                cor={car.cor}
                key={car.id}
              />
            );
          })}
        </div>
        <Fragment />
        <Container>
          <p>Esse é o exemplo do children</p>
        </Container>

        <ExecuteFunctions myFunction={showMessage} />

        <ChangeMessageState handleShowMessage={handleShowMessage} />
      </header>
    </div>
  );
}

export default App;

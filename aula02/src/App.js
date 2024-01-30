// Componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpress from "./components/TemplateExpress";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";

// Styles = CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Learning Fundaments</h2>
      <FirstComponent />
      <TemplateExpress />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;

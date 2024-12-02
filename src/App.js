import Header from "./components/header";
import MenuLateral from "./pages/Login/MenuLateral";
import Login from "./pages/Login/Login";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />

      <ListarTarefa />
    </div>
  );
}

export default App;

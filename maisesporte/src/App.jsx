import Header from "./components/Header";
import Evento from "./pages/Evento";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Global from "./styles/Global";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div>
      <Header />
      <Cadastro />
      <Login />
      <Evento />
      <Banner />
      <Home />
      <Footer />
      <Global />
    </div>
  );
}

export default App;

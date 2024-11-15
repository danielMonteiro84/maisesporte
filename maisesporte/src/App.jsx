import Header from "./components/Header";
import Evento from "./pages/Evento";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Global from "./styles/Global";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Evento />
      <Banner />
      <Home />
      <Footer />
      <Global />
    </div>
  );
}

export default App;

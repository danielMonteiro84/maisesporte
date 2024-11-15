import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Global from "./styles/Global";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Home />
      <Footer />
      <Global />
    </div>
  );
}

export default App;

import Home from "./Home";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <main>
    <NavBar />
      <Container>
        <Home />
        <Favorite />
        <About />
      </Container>
    </main>
    );
}

export default App;

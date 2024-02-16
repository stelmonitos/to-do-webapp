import Home from "./Home";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import List from "./components/List/List";
function App() {
  return (
    <main>
    <NavBar />
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
    </main>
    );
}

export default App;

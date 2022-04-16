import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Movie } from "./Pages/Movie/Movie";
import { Move_page } from "./Pages/Movie/Move_page";
import { MainHome } from "./Pages/MainHome";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/" element={<Movie />} />
        <Route path="/movie/:id" element={<Move_page />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Movie } from "./Pages/Movie";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;

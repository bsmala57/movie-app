import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Login from "./Login";
import Register from "./Register";
import TV from "./TV";
import People from "./People";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ActorsDetalis from "./ActorsDetalis";
import TvDetalis from "./TvDetalis";
import MoviesDetalis from "./MoviesDetalis";
import Tvshow from './Tvshow';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tv" element={<Tvshow />} />
        <Route path="people" element={<People />} />
        <Route path="movieDetails/:id" element={<MoviesDetalis />} />
        <Route path="tvdetalis/:id" element={<TvDetalis />} />
        <Route path="people/:id" element={<ActorsDetalis />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

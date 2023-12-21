import { Route, Routes } from "react-router-dom";
import Home from "./src/Pages/Home";

import Perro from "./src/Pages/Components/Perro";
import Perfiles from "./src/Pages/Components/Perfiles";
import Registro from "./src/Pages/Components/Registro";
import PerroC from "./src/Pages/Components/PerroC"
import PerroA from "./src/Pages/Components/PerroA"
import PerroR from "./src/Pages/Components/PerroR"
const RouterApp = () => {
  return <LogedInRoutes />;
};


const LogedInRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Perfiles" element={<Perfiles />} />
        <Route path='/Registro' element={<Registro />}/>
        <Route path='/PerroC' element={<PerroC />}/>
        <Route path='PerroC/PerroA' element={<PerroA />}/>
        <Route path='PerroC/PerroR' element={<PerroR />}/>
        <Route path="/Perro" element={<Perro/>} />

      </Routes>
    </>
  );
};
export default RouterApp;
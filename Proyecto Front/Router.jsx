import { Route, Routes } from "react-router-dom";
import Home from "./src/Pages/Home";


import Perfiles from "./src/Pages/Components/Perfiles";
import Registrar from "./src/Pages/Components/Registrar";
import Editar from "./src/Pages/Components/Editar"
import Listar from "./src/Pages/Components/Listar"
import Eliminar from "./src/Pages/Components/Eliminar"
const RouterApp = () => {
  return <LogedInRoutes />;
};


const LogedInRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Perfiles" element={<Perfiles />} />
        <Route path='/Registrar' element={<Registrar />}/>
        <Route path='/Editar' element={<Editar />}/>
        <Route path='Editar/Listar' element={<Listar />}/>
        <Route path='Editar/Eliminar' element={<Eliminar />}/>
      </Routes>
    </>
  );
};
export default RouterApp;
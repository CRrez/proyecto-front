import React from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Perro from "./Components/Perro";
import Perfiles from "./Components/Perfiles";
import Registro from "./Components/Registro";
//import PokeDetalle from "./Components/PokeDetalle";
//import Formulario from "./Formulario";


export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
        <Perfiles>
        </Perfiles>
        




  )
}

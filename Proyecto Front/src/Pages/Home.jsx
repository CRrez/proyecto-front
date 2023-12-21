import React from "react"

import Box from '@mui/material/Box';
import Perfiles from "./Components/Perfiles";




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

import React, { useState, Fragment } from "react";
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useBuscarInfoQuery } from "../Queries/RegistrarQuery";
import {useParams } from "react-router-dom";




export default function Registro()  {
const paramsUrl = useParams();
  const { data } = useBuscarInfoQuery(paramsUrl);




const handlesubmit=(event)=>{
  event.preventDefault();

}
  const handleChange = (event) => {
    const { name, value } = event.target;
 };
  return (
    <Container>
      <form id="caja" onSubmit={handlesubmit}>     
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12} xs={12} sx={{ mb: 5 }}>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={4}>


            </Grid>
            <Grid item md={4}>

                      <TextField
                        margin="dense"
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        name="Nombre"
                        onChange={handleChange}
                        
                      />
            </Grid>
            <Grid item md={4}>

                      <TextField
                        margin="dense"
                        label="Descripcion"
                        variant="outlined"
                        fullWidth
                        name="Descripcion"
                        onChange={handleChange}
                        

                      />
                  </Grid>

          </Grid>
          <Button
            id="terminar_registro"
            color="primary"
            size="large"
            variant="contained"
            type="submit"
          >
          Registrar Articulo
          </Button>
        </Grid>

      </Grid>
    </form> </Container>
  );
};

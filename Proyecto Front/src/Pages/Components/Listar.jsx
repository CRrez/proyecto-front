import {
    Avatar,
    Button,
    Divider,
    Grid,
    LinearProgress,
    List,
    ListItem,
    Collapse,
    IconButton,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    ListItemText,
    Typography,
    styled,
    CircularProgress,
    Alert
  } from "@mui/material";
  import {React} from "react";
  import {useState } from "react";
  import {useBuscarInfoQuery} from "../Queries/ListarQuery"
  import { Link,useParams,useLocation } from "react-router-dom";
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Key } from "@mui/icons-material";

  export default function PerroC()
  {
  




    const location = useLocation();
    const datosRecibidos = location.state;
    console.log(datosRecibidos);
    const paramsUrl = useParams();
    const [disableB,isDisableB] =useState(false);
    const [disableB2,isDisableB2] =useState(false);
    const [disableB3,isDisableB3] =useState(false);
    const [listaSeleccionados, setListaSeleccionados] = useState([]);
    const [listaRechazados, setListaRechazados] = useState([]);
    const [expanded, setExpanded] = useState(false);


    const { data: perro, isError: hayError,isLoading:cargaPerro,refetch } = useBuscarInfoQuery({valor:paramsUrl.pid,isDisableB,isDisableB2,isDisableB3});

   

    const HandleClick=(event)=>{
        event.preventDefault();

      }

      const HandleClick2=(event)=>{
        event.preventDefault();
      }


      return (
          <>
            {hayError && <Alert severity="error">No hay articulos para mostrar</Alert>}

            <Link
                      to={{   
                        pathname:"./PerroA",
                       // state:{id:value.id,nombre:value.nombre,img:value.img, desc:value.desc}
                      }}>
                          <Button  
                            variant="outlined"
                            color="primary"
                                disabled={disableB}
                            >
                            Ver Perros Aceptado
                            </Button>
                                     
                        </Link>      

                                    <Link
                      to={{   
                        pathname:"./PerroR",
                       // state:{id:value.id,nombre:value.nombre,img:value.img, desc:value.desc}
                      }}>
                          <Button  
                            variant="outlined"
                            color="primary"
                                disabled={disableB}
                            >
                            Ver Perros Rechazados
                            </Button>
                                     
                        </Link>        
            <Grid container spacing={2}>
              
              <Grid item xs  >

              {cargaPerro &&<CircularProgress/>}
             
                   <List >
                     {perro?.perros.map((value)=>
                    <Card sx={{ maxWidth: 460 }}>
                    
                    <CardHeader
                          
                          title= {value.nombre}
                        
                        />
                      <CardMedia sx={{maxWidth: 200}} component="img" image={value.imagen} />
              
                      <CardContent>
                        
                      <Typography variant="body2" color="text.secondary">
                            
                      </Typography>
                        
                      </CardContent>
                      <CardActions>
                        
                     
                          <Button  
                            variant="outlined"
                            color="primary"
                                disabled={disableB}
                                onClick={HandleClick}
                            >
                            Aceptar
                            </Button>

                          <Button  
                            variant="outlined"
                            color="primary"
                                disabled={disableB}
                                onClick={HandleClick2}
                            >
                            Rechazar
                        </Button>
                          
                        
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>

              <Typography paragraph>
                    {perro?.desc}
                    </Typography>
              </CardContent>
              </Collapse>
                    </Card>  
                    )};
                  </List>      
            
              </Grid> 


 


            </Grid>
          </>
        );
  }
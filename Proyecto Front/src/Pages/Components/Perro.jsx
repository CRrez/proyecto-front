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
    CircularProgress
  } from "@mui/material";
  import {React} from "react";
  import {useState } from "react";
  import {useBuscarInfoQuery} from "../Queries/Perroquery"
  import { Link,useParams,useLocation } from "react-router-dom";
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Key } from "@mui/icons-material";

  export default function Perro()
  {
  

    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));



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
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const handleExpandClick = () => 
            {setExpanded(!expanded);
              setExpanded2(false);
              setExpanded3(false);
            };
    const handleExpandClick2 = () => 
            {setExpanded(false);
              setExpanded2(!expanded2);
              setExpanded3(false);};
    const handleExpandClick3 = () => 
            {setExpanded(false);
              setExpanded2(false);
              setExpanded3(!expanded3);};
    const { data: perro, isError: hayError,isLoading:cargaPerro,refetch } = useBuscarInfoQuery({valor:paramsUrl.pid,isDisableB,isDisableB2,isDisableB3});

   

   


//aca muevo de la fila 1 a la 2
    function selectPerro(valor,imagen,descrip) {
      setExpanded(false);
      setExpanded2(false);
      setExpanded3(false);
      isDisableB(true);
      isDisableB2(true);
      isDisableB3(true);
      refetch();
      if (!listaSeleccionados.includes(valor) && !listaSeleccionados.includes(imagen) && !listaSeleccionados.includes(descrip)) 
      {
        setListaSeleccionados((listaSeleccionados) => [ {valor,imagen,descrip},...listaSeleccionados]);
      }
      }

    
  //aca muevo de la 1 a la 3
      function rechazaPerro(valor,imagen,descrip) {
        setExpanded(false);
        setExpanded2(false);
        setExpanded3(false);
        isDisableB2(true);
        isDisableB(true);
        isDisableB3(true);
            refetch();

        if (!listaRechazados.includes(valor) || !listaRechazados.includes(imagen) || !listaRechazados.includes(descrip)) {
          setListaRechazados((listaRechazados) => [{valor,imagen,descrip},...listaRechazados]);
          let otros;
        }
        } 
        
        //aca cambio de la fila 2 a la 3
        function cambiaPerro(valor,imagen,descrip) {
          setExpanded(false);
          setExpanded2(false);
          setExpanded3(false);
          isDisableB2(true);
          isDisableB(true);
          isDisableB3(true);
          refetch();
          setListaRechazados((listaRechazados) => [{valor,imagen,descrip},...listaRechazados]);
          let filtro1;
          filtro1 = listaSeleccionados.filter(item => item.valor !== valor && item.imagen !==imagen && item.descrip !==descrip);
          console.log(filtro1);
          setListaSeleccionados(filtro1);
        console.log(listaSeleccionados);
         
          }
          function cambiaPerro2(valor,imagen,descrip) {
            setExpanded(false);
            setExpanded2(false);
            setExpanded3(false);
            isDisableB2(true);
            isDisableB(true);
            isDisableB3(true);
            refetch();
              
            setListaSeleccionados((listaSeleccionados) => [{valor,imagen,descrip},...listaSeleccionados]);
                  let filtro1;
                filtro1 = listaRechazados.filter(item => item.valor !== valor && item.imagen !==imagen && item.descrip !==descrip)  ;  
                setListaRechazados(filtro1);
                console.log(filtro1);

            console.log(" lista rechazados  "+listaRechazados);
            }
      return (
          <>
            {hayError && <Alert severity="error">ese perro no esta</Alert>}


            <Grid container spacing={2}>
              
              <Grid item xs  >

              {cargaPerro &&<CircularProgress/>}
                   <List scrollable>
                    <Card sx={{ maxWidth: 460 }}>
                    
                    <CardHeader
                          
                          title= {perro?.nom}
                        
                        />
                      <CardMedia sx={{maxWidth: 200}} component="img" image={perro?.message} />
              
                      <CardContent>
                        
                      <Typography variant="body2" color="text.secondary">
                            
                      </Typography>
                        
                      </CardContent>
                      <CardActions>

                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick }
                aria-expanded={expanded}
                aria-label="show more"
              > Descripcion
                <ExpandMoreIcon />
              </ExpandMore>
                        
                          <Button  
                           variant="outlined"
                           color="primary"
                              disabled={disableB}
                            onClick={() => 
                            selectPerro(perro?.nom,perro?.message,perro?.desc)}>
                          Aceptar
                        </Button>
                       
                        <Button
                        
                        variant="outlined"
                        color="secondary"
                        disabled={disableB2}
                        onClick={()=>rechazaPerro(perro?.nom,perro?.message,perro?.desc)}
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
                  </List>      
              </Grid> 


              
              <Grid item xs >
                 {cargaPerro &&<CircularProgress/>}
  
               
                  {listaSeleccionados?.map((value,index)=>
                <>     
                <List disablePadding scrollable>
                   <Card sx={{ maxWidth: 460 } }   >     

                           <CardHeader key={index}
                          
                           title= {value.valor}/>
                        
                      <CardMedia sx={{maxWidth: 200}} component="img" image={value.imagen} />
                      <CardContent>
                        
                      <Typography variant="body2" color="text.secondary">
                            
                      </Typography>
                        
                      </CardContent>
                      <CardActions>


                        <ExpandMore
                        expand={expanded2}
                        onClick={handleExpandClick2}
                        aria-expanded={expanded2}
                        aria-label="show more"
                      >
                        Descripcion
                        <ExpandMoreIcon />
                      </ExpandMore>
                        <Button
                        variant="outlined"
                        color="primary"
                        disabled={disableB3}
                        onClick={()=>cambiaPerro(value.valor,value.imagen,value.descrip)}
                        >
                          Arrepentirse
                        </Button>
                        
                          
                        
                      </CardActions>
                      <Collapse in={expanded2} timeout="auto" unmountOnExit>
                      <CardContent>

                      <Typography paragraph>
                               {value.descrip}
                      </Typography>
                      </CardContent>
                      </Collapse>
                 
              
                    </Card> 
                    </List>
   </>
                )}
              </Grid> 
               
              <Grid item xs>

            {cargaPerro &&<CircularProgress/>}

            {listaRechazados.map((item,index)=>
            
            <>
            
            <List disablePadding>
            <Card sx={{ maxWidth: 460 }}>

            <CardHeader key={index}
                
                title= {item.valor}
              
              />
            <CardMedia sx={{maxWidth: 200}} component="img" image={item.imagen} />

            <CardContent>
              
            <Typography variant="body2" color="text.secondary">
                
            </Typography>
              
            </CardContent>
            <CardActions>

            <ExpandMore
                expand={expanded3}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
                aria-label="show more"
              >
                Descripcion
                <ExpandMoreIcon />
              </ExpandMore>
              
                <Button  
                variant="outlined"
                color="primary"
                disabled={disableB3}
                  onClick={() =>  cambiaPerro2(item.valor,item.imagen,item.descrip)}
                >
                Arrepentirse
              </Button>
              
             
              
                
              
            </CardActions>
            <Collapse in={expanded3} timeout="auto" unmountOnExit>
              <CardContent>

              <Typography paragraph>
                    {item.descrip}
                    </Typography>
              </CardContent>
              </Collapse>
            </Card>

            </List>     
            </>
            )} 
              </Grid> 

            </Grid>
          </>
        );
  }
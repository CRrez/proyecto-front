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
    Fab,
    Toolbar,
    } from "@mui/material";
  import {React} from "react";
  import {useState } from "react"; 
  import {useBuscarInfoQuery} from "../Queries/BackQuery"
  import { Link,useParams } from "react-router-dom";
  import Registro from "../Components/Registro";
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Key } from "@mui/icons-material";


export default function Perfiles(){
    
    const paramsUrl = useParams();
    const [disableB,isDisableB] =useState(false);
    const [disableB2,isDisableB2] =useState(false);
    const [disableB3,isDisableB3] =useState(false);
    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [linkStateValue, setLinkStateValue] = useState(null);
 
    const { data: perro, isError: hayError,isLoading:cargaPerro,refetch } = useBuscarInfoQuery({valor:paramsUrl.pid,isDisableB,isDisableB2,isDisableB3});
    
       const handleClick = () => 
    {
      setLinkStateValue(value)
    };
    return   (
    <>
 <Link
                      to={{   
                        pathname:"Registro",
                      
                      }}>
                          <Button  
                            variant="outlined"
                            color="primary"
                                disabled={disableB}
                            >
                            Registrar Perro
                            </Button>
                                     
                        </Link>         

        <Grid  ></Grid>
        <Grid item xs  >
        {cargaPerro &&<CircularProgress/>}
                 {perro?.perros.map((value)=>
            <List >
         
                    <Card key={value.id}  ></Card>
                    <CardHeader                     
                    title= {value.nombre}    
                    />
                    <CardMedia sx={{maxWidth: 200}} component="img" image={value.img} />    
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                            
                    </Typography>                      
                    </CardContent>    
                                <CardActions>
                      <Link
                      to={{   
                        pathname:"PerroC",
                        state:{value: linkStateValue}
                      }}>
                          <Button  
                            variant="outlined"
                            color="primary"
                                disabled={disableB}
                                onClick={handleClick}
                            >
                            Seleccionar
                            </Button>
                                     
                        </Link>                              
                                </CardActions>  

                    
            </List> 
            )};                                         
        </Grid>
    </>
    );
    }
    


            

            

            
               

                    

                        


            

                        

                        




                        
 
  

                   

                        
 
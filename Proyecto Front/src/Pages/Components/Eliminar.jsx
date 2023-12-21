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

  import {useBuscarInfoQuery} from "../Queries/EliminarQuery";
  import { Link,useParams,useLocation } from "react-router-dom";
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Key } from "@mui/icons-material";

  export default function PerroR()
  {
  




    const location = useLocation();
    const datosRecibidos = location.state;
    console.log(datosRecibidos);
    const paramsUrl = useParams();
    const [disableB,isDisableB] =useState(false);
    const [disableB2,isDisableB2] =useState(false);
    const [disableB3,isDisableB3] =useState(false);
    const [expanded, setExpanded] = useState(false);


    const { data: perro, isError: hayError,isLoading:cargaPerro,refetch } = useBuscarInfoQuery({valor:paramsUrl.pid,isDisableB,isDisableB2,isDisableB3});

   




      return (
          <>
            {hayError && <Alert severity="error">ese perro no esta</Alert>}


            <Grid container spacing={2}>
              
              <Grid item xs  >

              {cargaPerro &&<CircularProgress/>}
              {perro?.perros.map((value)=>
                   <List >
                    <Card sx={{ maxWidth: 460 }}>
                    
                    <CardHeader
                          
                          title= {value.nombre}
                        
                        />
                      <CardMedia sx={{maxWidth: 200}} component="img" image={value.img} />
              
                      <CardContent>
                        
                      <Typography variant="body2" color="text.secondary">
                            
                      </Typography>
                        
                      </CardContent>
                  
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>

              <Typography paragraph>
                    {perro?.desc}
                    </Typography>
              </CardContent>
              </Collapse>
                    </Card>
                  </List>    
              )};  
              </Grid> 


 


            </Grid>
          </>
        );
  }
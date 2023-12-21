import React from "react"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Registrar from "./Registrar";


export default function Perfiles() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
<>
    <Box sx={{ width: '100%' }}>

      <CustomTabPanel value={value} index={2}>
        <Registrar></Registrar>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Editar></Editar>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={0}>
       <Listar></Listar>
      </CustomTabPanel> 
      <CustomTabPanel value={value} index={0}>
       <Borrar></Borrar>
      </CustomTabPanel> 
    </Box>


    </>
  )
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

            
               

                    

                        


            

                        

                        




                        
 
  

                   

                        
 
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export function useBuscarInfoQuery(params) {

  return useQuery(
    ["buscarInfoQuery",params], buscarInfoQuery, {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
  });
  
};

export const buscarInfoQuery = async (params) => { 
    const [queryName, paramsFilter] = params.queryKey;
    const [queryName2, paramsFilter2] = params.queryKey;
    let url= "http://127.0.0.1:8000/api/perro/registrarPerro";

    try {
      // Aquí se envía el objeto paramsFilter o paramsFilter2, dependiendo de tu lógica
      const { data } = await axios.post(url, {param: params});
      console.log(data);
      return data;
    } catch (error) {
      // Manejo de errores aquí, por ejemplo, puedes lanzar el error para ser manejado en el componente
      throw new Error("Hubo un error al enviar la solicitud POST.");

    return data;
    }
    };
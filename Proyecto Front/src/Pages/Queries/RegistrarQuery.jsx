import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export function useBuscarInfoQuery(params) {
  return useQuery(
  {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,

  });
  
};

export const buscarInfoQuery = async (params) => { 
    const [queryName, paramsFilter] = params.queryKey;
    const [queryName2, paramsFilter2] = params.queryKey;
    let url= "http://127.0.0.1:8000/api/articulo/registraArticulo";

    const { data } = await axios.post(url);

   

    return data;
    };
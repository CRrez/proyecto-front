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
    let url= "http://127.0.0.1:8000/api/articulo/actualizaArticulo";

    const { data } = await axios.get(url);

   

    return data;
    };
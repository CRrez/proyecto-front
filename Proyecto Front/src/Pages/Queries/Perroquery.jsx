import { useQuery } from "@tanstack/react-query";
import axios from "axios";




export function useBuscarInfoQuery(params) {
    let habilitado = params.valor != "";
  return useQuery(
    ["buscarInfoQuery",params], buscarInfoQuery, {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: habilitado,
  });
  
}
export const buscarInfoQuery = async (params) => { 
    const [queryName, paramsFilter] = params.queryKey;
    const [queryName2, paramsFilter2] = params.queryKey;
    let url2= "https://dog.ceo/api/breeds/image/random";

    const { data } = await axios.get(url2);


   

    params.queryKey[1].isDisableB(false);
    params.queryKey[1].isDisableB2(false);
    params.queryKey[1].isDisableB3(false);
    return data;
    };
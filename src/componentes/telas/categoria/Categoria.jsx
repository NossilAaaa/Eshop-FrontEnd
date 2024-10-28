import { useState, useEffect } from "react";
import CategoriaContext from "./CategoriaContext";
import { getCategoriaPorCodigoAPI, getCategoriasAPI, deleteCategoriaPorCodigoAPI,
 cadastraCategoriaAPI } from "../../../servicos/CategoriaServicos";

 function Categoria(){

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);

    const recuperaCategorias = async () => {
        setListaObjetos(await getCategoriasAPI());
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este objeto?')) {
            let retornoAPI = await deleteCategoriaPorCodigoAPI(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message })
            recuperaCategorias();
        }
    }

    useEffect(() => {
        recuperaCategorias();
    }, []);

    return (
        <CategoriaContext.Provider value={
            {
                alerta, setAlerta,
                listaObjetos,
                remover
            }
        }>
        </CategoriaContext.Provider>
    );
       
    
 }

 export default Categoria;
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({children}) {
    // let isAuthenticated = useSelector((state) => state.auth.isAuthenticated); se puede hacer de ambas formas
    let {isAuthenticated} = useSelector((state) => state.auth);

    //verificar si el usuario esta autenticado
    if(!isAuthenticated){
        //redirigee a la pagina home
        return <Navigate to="/" />
    } 

    return children

    
}

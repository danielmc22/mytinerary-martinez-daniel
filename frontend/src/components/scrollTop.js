import {useEffect} from "react";
import {useLocation} from "react-router-dom";


export default function ScrollTop() {
    const {pathname} = useLocation();
    useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);
    return null;

}
/*  ScrollTop se crea como un componente nuevo integrado a todos los componentes 
una vez es integrado en la app. permite pasar de un componente a otro o de una página
a otra siempre con la vista superior de la pantalla o del scroll */
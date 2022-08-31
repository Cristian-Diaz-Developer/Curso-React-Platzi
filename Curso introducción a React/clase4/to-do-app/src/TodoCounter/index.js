import React from "react";
import './index.css'

// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow'
// }

function TodoCounter ({total, completed}){
    
    return(
        <h2 className="TodoCounter"> Has completado {completed} de {total} TODOs</h2>
    );
}
export {TodoCounter};

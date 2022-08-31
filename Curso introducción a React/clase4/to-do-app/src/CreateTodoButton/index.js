import React from 'react'
import './index.css'

function CreateTodoButton(props){
const onClickButton = (msg) => {
    alert (msg);
    };

  return (
    <button className="CreateTodoButton"
    onClick={() => onClickButton('Aquí se debería abrir al modal')}
    >
    +
    </button>
  )
}
export {CreateTodoButton};

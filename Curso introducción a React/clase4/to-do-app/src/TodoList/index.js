import React from 'react'
import './index.css'
const TodoList = (props) => {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

export  {TodoList};
import React from "react";
import { TodoCounter } from '../TodoCounter/index';
import { TodoList } from '../TodoList/index';
import { TodoSearch } from '../TodoSearch/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TodoItem } from '../TodoItem/index.';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo, 
    deleteTodo 
}){
    return(<React.Fragment> 
        <TodoCounter
          total = {totalTodos}
          completed = {completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
            key = {todo.text}
            text={todo.text}
            completed = {todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton/>
          {/* <button>+</button>   */}
      </React.Fragment>)
}

export {AppUI};
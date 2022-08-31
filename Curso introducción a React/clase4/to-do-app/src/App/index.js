// import './App.css';
import React from "react";
import { AppUI } from "./AppUI";


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed:false },
//   { text: 'Tomar el cursso de intro a React', completed:false },
//   { text: 'Llorar con la llorona', completed:false },
//   { text: 'LALALALAA', completed:false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.getItem('TODOS_V1')

function useLocalStorage (itemName, initialValue){ 
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(()=> {
      try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          
          if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue; 
          }else{
            parsedItem = JSON.parse(localStorageItem)
          }
          setItem (parsedItem);
          
      } catch (error) {
        setError(error)
      } finally{
        setLoading(false);
      }
    },1000);
  });  


  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
    } catch (error) {
      setError(error)
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}


function App() {

 const {
  item: todos,
  saveItem: saveTodos,
  loading,
  error,
 }= useLocalStorage('TODOS_V1', [])
//  const [name , saveNAme] = useLocalStorage('nombreImportante','')
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos =todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if(!searchValue.length >=1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  
  }



  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
    // todos[todoIndex] = {  
    //   text: todos[todoIndex].text,
    //   completed: true,
    // }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    };

    // console.log('Render antes del use Effect');

    // React.useEffect(() => {
    //   console.log('use Effect');
    // }, [totalTodos])

    // console.log('Render despues del use Effect');


  return (
    <AppUI 
    loading= {loading}
    error = {error}
    totalTodos = {totalTodos}
    completedTodos = {completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    />
    );
}

export default App;

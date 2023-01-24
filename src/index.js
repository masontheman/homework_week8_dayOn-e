import React,{ useContext,createContext  } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './comp/Nav';
import Todo from './comp/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theTodo = createContext()
function GetToDos(){
  function handleMySubmit(e){
    e.preventDefault();
    theTodo.todoo = e.target.inputy.value;
    return theTodo;
  }
  return (<>
  <form onSubmit={handleMySubmit}>
  <input type='text' name="inputy"></input>
  <input type="submit"></input>
  </form>
  </>);
}

function UseTheTodo(){
  const useTheTodo = useContext(theTodo)
  return (
    <>
      {useTheTodo.todoo && <p>{useTheTodo.todoo}</p>}
    </>
  );
}

root.render(
  <React.StrictMode>
  <Nav />
    <App />
  <Todo />
  <GetToDos ><UseTheTodo /></GetToDos>
  
  </React.StrictMode>
);








reportWebVitals();

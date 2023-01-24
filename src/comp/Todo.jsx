import React, {useState} from 'react'

export default function Todo() {
    const [todo, setTodo] = useState([])

    function handleSubmitForm(r){
        r.preventDefault();
        setTodo([...todo,r.target.elements.todoDesc.value]);
    }
  return (<>
    <form onSubmit={handleSubmitForm}>
        <input type='text' name="todoDesc"></input>
        <input type="submit"></input>
    </form>
    {todo}
    {todo === [] ? <li>{todo}</li> : ''}

    </>
  );
}

import React , {useState} from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem';
const  primaryColor = '#3ad4b0';
const TodoListStyle = styled.div`
margin: 0 auto;
padding : 1rem;
width : 500px;
background-color:#141414;
border-radius: 5px;
box-shadow : 0 0 15px rgba(0,0,0,0.2);
h1{
    color : #ddd;
    text-align: center;
    margin-bottom: 2rem;
}
form{
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 1.5rem;
input{
    padding: 0.5rem;
    border: none;
    border-radius: 5px 0 0 5px;
    backgorund : #ddd;
    width: 80%;
    transition : all 0.3s ease-in-out;
     &:hover{
           background : #fff;
     }
     &:active{
         background : #fff;
         outline:none
     }
     &:focus{
         background : #fff;
         outline:none
      }
    }
    button{
        border:none;
        padding : 0.5rem 1rem;
        border-radius: 0px 5px 5px 0px;
        background : ${primaryColor};
        color:#141414;
        font-weight:600;
         cursor:pointer;
      }
}


`;

function TodoList() {
    const [toDos, setToDos] = useState([]);
    const [inputValue, setInputValue] = useState([]);

    document.body.style = 'background: #3ad4b0;';
const HandleSubmit = (e) => {
    e.preventDefault()
   // console.log('submitted')

   //validi

   inputValue === "" && alert("Add item")
   setToDos([...toDos, inputValue.toUpperCase()])
   setInputValue("")
}
const handleInputChange = (e) => {
    setInputValue(e.target.value)
}
const handleDeleteTodo = (index) => {
    if(!window.confirm("are u sure you want to delete this item")){
        return
    }
    const newToDos = [...toDos]
    newToDos.splice(index, 1)
    setToDos(newToDos)
}
  return (
    <TodoListStyle>

<h1>To-do List</h1>

<form onSubmit={HandleSubmit}>
<input  placeholder='Add Todo' value={inputValue} onChange={handleInputChange} />
<button type='submit'>Add</button>
</form>
<ul>
    {/* <TodoItem />
    <TodoItem />
    <TodoItem /> */}

    {toDos.map((todo, index) =>(<TodoItem key={index} nr ={index} todo={todo} deleteTodo={handleDeleteTodo} />) )}

</ul>
    </TodoListStyle>
  )
}

export default TodoList
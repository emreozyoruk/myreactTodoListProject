import React , {useState} from 'react'
import styled,{keyframes} from 'styled-components'
import { FaTrash } from "react-icons/fa"
const shrink = keyframes`
0%{
    transform:  scale(1);
}
50%{
    transform: scale(.9)
}
100	%{
    transform: scale(1)
}
`
const  primaryColor = '#3ad4b0';

const  TodoItemStyle = styled.li`
list-style-type:none;

span{
    display:flex;
    align-items:center;
    h4{
        margin-right: 1rem;
        color : ${primaryColor};
    }
    h3{
       text-decoration: ${(props) => props.checked && "line-through" } ;
    }
}
color:#ddd;
color ${(props) => props.checked ? "gray" : "#fff" } ;
border: 1px solid ${primaryColor};
border-radius: 4px;
margin-bottom: 1rem;
display:flex;
justify-content: space-between;
transition: all 0.3s ease-in-out;
padding: 0.35rem 1rem;
&:hover{
    background-color: ${primaryColor};
    h4,button{
        color:#111;
    }
}
&.checked{
    animation: ${shrink} 0.3s ease-in-out;
}
button{
    cursor:pointer;
    background-color:transparent;
    border:none;
    font-size:1rem;
    color : ${primaryColor};
    transition: all 0.3s ease-in-out;
    &:hover{
        color: #d44a4a;
    }
}
`


function TodoItem({nr,todo,deleteTodo}) {
    const [isChecked , setIsChecked] = useState({completed:false,button:false})
    const handleCheckItem = () => {
    setIsChecked({completed:!isChecked.completed,button:!isChecked.button})
    }
  return (
    <TodoItemStyle {...{checked: isChecked.completed}} onClick={handleCheckItem}
    className={isChecked.completed && "checked"}
    
    >
        <span>
            <h4>{nr + 1}</h4>
            <h3>{todo}</h3>
        </span>

        {isChecked.button && (
        <button onClick={deleteTodo}>
        <FaTrash  />
            delete</button>)}





    </TodoItemStyle>
  )
}

export default TodoItem
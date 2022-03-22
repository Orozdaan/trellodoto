import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { projectActions } from '../store/project'
const Li =styled.li`
list-style-type: none;
`

const NewTodo = ({list}) => {
  const dispatch =useDispatch()
  const showModalHandler =()=>{
    dispatch(projectActions.showModal())
  }
  
  return (
    <div>
        {list.map((el) => (
            <div key={el.id}>
                <Li onClick={showModalHandler}>{el.task}</Li>
            </div>
        ))}
    </div>
  )
}

export default NewTodo
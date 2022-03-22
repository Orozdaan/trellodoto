import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { projectActions } from '../store/project'
const Modals = styled.div`
        width: 400px;
        height: 200px;
        border-radius: 3px;
        background-color: #fff;
        padding: 2rem;
        justify-content: space-around;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
    `
    const Backdrop = styled.div`
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background: rgba(0, 0, 0, 0.7);
        z-index: 10;
    `
    const Textarea = styled.textarea`
    width: 400px;
    height: 60px;
    `
    const Button = styled.button`
    margin: 10px;
    background-color: green;
    border: none;
    color: #fff;
    height: 25px;
    border-radius: 4px;
    margin-bottom: 250px;
    `
    const BtnButton= styled.button`
    width: 30px;
    height: 20px;
    `
function Modal() {
    const dispatch = useDispatch()
    const closeModalHandler =()=>{
        dispatch(projectActions.closeModal())
    }
  return (
    <>
    <Backdrop/>
    <Modals>
        <h3>описание</h3>
        <Textarea placeholder='добавить описание'/>
        <div>
        <Button>Сохранить</Button>
        <Button onClick={closeModalHandler}>X</Button>
        </div>
    </Modals>
    </>
  )
}

export default Modal
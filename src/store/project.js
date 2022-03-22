import { createSlice } from '@reduxjs/toolkit'

const initProjectState ={showProject: false,showModal:false }

const projectSlice=createSlice({
    name:'auth',
    initialState:initProjectState,
    reducers:{
        toogleProject(state){
            state.showProject =true
        },
        showModal(state){
            state.showModal=true
        },
        closeModal(state){
            state.showModal=false
        }

    }
})
export const projectActions = projectSlice.actions
export default projectSlice
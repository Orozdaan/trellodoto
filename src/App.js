import React, {useState}from 'react'
import Login from './components/Login'
import Header from './components/Header'
// import Project from "./components/Project";
import { useDispatch, useSelector } from 'react-redux'
import Project from './components/Project'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Modal from './components/Modal'

function App() {
	const isAuth = useSelector((state) => state.auth)
	

	
	// const dispatch=useDispatch()
	// const showModal=useSelector((state)=>state)
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/Header' element={<Main/>} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App

import React, { useState } from 'react'
import NewProject from './NewProject'
import Project from './Project'
import styled from 'styled-components'
import Header from './Header'
import Modal from './Modal'
import { useSelector } from 'react-redux'

const MainContainer = styled.div`
	width: 1500px;
	padding: 1rem;
	display: flex;
	
`
const Main = () => {
	const show = useSelector(state=>state.project.showModal)
	console.log(show);
	return (
		<>{show&& <Modal/>}
		
			<Header />
			<MainContainer>
					<Project />
					<NewProject />
				
			</MainContainer>
		</>
	)
}
export default Main

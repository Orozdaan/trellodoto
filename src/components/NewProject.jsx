import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import NewProjectItem from './NewProjectItem'

const Container = styled.div`
	display: flex;
	width: 200px;
	p {
		text-align: center;
	}
	
`
function NewProject(props) {
	const newCard = useSelector((state) => state.newList)
	return (
		<Container>
			{newCard.map((el) => (
				<NewProjectItem
					key={el.id}
					name={el.name}
					list={el.list}
					id={el.id}
				/>
			))}
		</Container>
	)
}

export default NewProject

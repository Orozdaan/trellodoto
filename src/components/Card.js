import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { listActions } from '../store/newList'

const Container = styled.div`
	margin-top: 40px;
	background-color: #ebecf0;
	width: 270px;
	margin-left: 100px;
	border-radius: 4px;
`
const InputContainer = styled.div`
	padding-top: 20px;
	padding-left: 5px;
`
const Input = styled.input`
	width: 250px;
	height: 30px;
	outline: none;
	border: gray solid;
	border-radius: 4px;
	::placeholder {
		padding-left: 5px;
	}
	&:focus {
		border: 3px solid #0079bf;
	}
`
const Button = styled.button`
	margin-top: 4px;
	background-color: #0079bf;
	margin-left: 5px;
	border: none;
	color: #fff;
	height: 25px;
	border-radius: 4px;
`
const Image = styled.img`
	display: block;
	color: #fff;
	width: 35px;
`
const ButtonImg = styled.div`
	padding-top: 7px;
	display: flex;
	justify-content: space-between;
	margin: 3px;
	width: 160px;
`
const Div = styled.div`
	background-color: gray;
	width: 200px;
	height: 30px;
	border-radius: 4px;
	opacity: 50%;
	&& :hover {
		box-shadow: 1px 1px 10px blue;
	}
`
const P = styled.p`
	color: white;
`
function Card(props) {
	const [value, setValue] = useState()
	const [toogle, setToogle] = useState(false)
	const dispatch = useDispatch()
	const showHandler = () => {
		dispatch(listActions.showToggle())
	}
	const inputChangeHandler = (e) => {
		setValue(e.target.value)
	}
	const addToListHandler = () => {
		dispatch(
			listActions.addItemToCart({
				id: Math.random().toString(),
				name: value,
			}),
			setToogle(''),
		)
	}
	return (
		<Container>
			{toogle ? (
				<InputContainer>
					<Input
						placeholder='enter list title'
						onClick={showHandler}
						onChange={inputChangeHandler}
					></Input>
					<ButtonImg>
						<Button
							onClick={addToListHandler}
							placeholder='Add list'
						>
							Add list
						</Button>
						<Image
							onClick={(e) => setToogle(false)}
							src='http://s1.iconbird.com/ico/2013/3/636/w80h80139396727833.png'
						></Image>
					</ButtonImg>
				</InputContainer>
			) : (
				<Div onClick={(e) => setToogle(true)}>
					<P> + create new project</P>
				</Div>
			)}
		</Container>
	)
}

export default Card

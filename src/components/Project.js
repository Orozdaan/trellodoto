import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { listActions } from '../store/newList'

const Container = styled.div`
	/* width: 2700px; */
	display: flex;
	
`
const InputContainer = styled.div`
	padding-left: 50px;

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
	/* background-color: gray; */
	width: 180px;
	height: 30px;
	border-radius: 4px;
	opacity: 50%;

	&& :hover {
		box-shadow: 1px 1px 10px blue;
		height: 30px;
	}
`
const P = styled.p`
	color: white;
`

function Project() {
	const [value, setValue] = useState()
	const newCard = useSelector((state) => state.list)
	// console.log();
	const [toogle, setToogle] = useState(false)
	const dispatch = useDispatch()
	const inputChangeHandler = (e) => {
		setValue(e.target.value)
	}
	const addToListHandler = () => {
		dispatch(
			listActions.addItemToCart({
				id: Math.random().toString(),
				name: value,
			}),
		)
		setToogle('')
	}
	// console.log(value);
	return (
		<div>
		<Container>
			{toogle ? (
				<InputContainer>
					<Input
						// value={newList}
						placeholder='enter list title'
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
							src='https://cdn-icons.flaticon.com/png/128/3482/premium/3482248.png?token=exp=1647853384~hmac=415d1e7b686b4abf6f5a09b53259c3df'
						></Image>
					</ButtonImg>
				</InputContainer>
			) : (
				<Div onClick={(e) => setToogle(true)}>
					<P> + create new project</P>
				</Div>
			)}
		</Container>
			</div>
	)
}
export default Project

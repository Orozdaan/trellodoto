import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { listActions } from '../store/newList'
import NewTodo from './NewTodo'
import styled from 'styled-components'

const TextArea = styled.textarea`
	width: 170px;
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
	background-color: green;
	margin-left: 5px;
	border: none;
	color: #fff;
	border-radius: 4px;
`
const ButtonImg = styled.div`
	width: 270px;
	padding-top: 7px;
	display: flex;
	justify-content: space-between;
	margin: 3px;
	width: 170px;
`
const Image = styled.img`
	display: block;
	color: #fff;
	width: 35px;
`
const Div = styled.div`
	margin-left: 15px;
	border-radius: 4px;
`
const StyledContainer = styled.div`
	width: 250px;
	height: 150px;
`

const NewProjectItem = (props) => {
	const [task, setTask] = useState('')
	const [showTaskInput, setShowTaskInput] = useState(true)

	const dispatch = useDispatch()

	const inputChangeHandler = (e) => {
		setTask(e.target.value)
	}

	const addTodoHandler = (event) => {
		dispatch(
			listActions.addCardItem({
				task: task,
				id: event.target.id,
			}),
			setTask(''),
		)
	}
	return (
		<Div>
			<p>{props.name}</p>

			{showTaskInput ? (
				<>
					<Button
						onClick={() =>
							setShowTaskInput((prevState) => !prevState)
						}
					>
						{' '}
						+Добавить карточку
					</Button>
				</>
			) : (
				<StyledContainer>
					<NewTodo list={props.list} key={props.id} />
					<TextArea
						onChange={inputChangeHandler}
						value={task}
					></TextArea>
					<ButtonImg>
						<Image
							src='https://cdn-icons.flaticon.com/png/128/3482/premium/3482248.png?token=exp=1647853384~hmac=415d1e7b686b4abf6f5a09b53259c3df'
							onClick={() =>
								setShowTaskInput((prevState) => !prevState)
							}
						></Image>
						<Button id={props.id} onClick={addTodoHandler}>
							+Добавить карточку
						</Button>
					</ButtonImg>
				</StyledContainer>
			)}
		</Div>
	)
}

export default NewProjectItem

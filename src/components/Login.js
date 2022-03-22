import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled,{createGlobalStyle} from 'styled-components'
import { authActions } from '../store/auth'

const GlobalStyle = createGlobalStyle`
  body{
    background:url('https://mywaytrip.com.ua/wp-content/uploads/2021/06/cappadocia.jpg');
  }
`

const Form = styled.form`
	display: flex;
	margin: 0 auto;
	width: 600px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 400px;
	font-family: 'Inter';
	margin-top: 50px;
	box-shadow: 1px 1px 10px blue;
	border-radius: 20px;
`
const Image = styled.img`
	margin-left: 10px;
	margin-top: 40px;
	height: 50px;
	width: 200px;
`

const Input = styled.input`
	min-width: 380px;
	padding: 20px 0;
	padding-left: 15px;
	margin-bottom: 10px;
	border: 1px solid blue;
	border-radius: 2px;
	font-size: 15px;
	display: flex;
`
const Button = styled.button`
	padding: 17px 30px;
	margin-top: 10px;
	background: blue;
	border: none;
	color: white;
`
const H2 = styled.h3`
	color: gray;
`

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassoword] = useState('')
	const navigate = useNavigate()
	const emailHandler = (e) => {
		setEmail(e.target.value)
	}
	const passwordHandler = (e) => {
		setPassoword(e.target.value)
	}

	const state = useSelector((state) => state.auth)

	const loginHandler = (e) => {
		e.preventDefault()
		state.map((user) => {
			if(user.email === email && user.password === password ){
				return navigate('/Header')
			}
		})
	}
	return ( 
		<>
		<GlobalStyle />
<Form onSubmit={loginHandler}>
			<Image src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png' />
			<H2>CREATE AN ACCOUNT</H2>

			<Input
				type='email'
				id='email'
				placeholder='enter your email'
				onChange={emailHandler}
			></Input>
			<Input
				type='password'
				id='email'
				placeholder='enter your password'
				onChange={passwordHandler}
			></Input>
			<Button onClick={loginHandler}>Create New Account</Button>
		</Form>
		</>
		
		
		
	)
}

export default Login

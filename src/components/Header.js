import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body{
    background:url("https://img5.goodfon.ru/wallpaper/nbig/4/ea/turtsiia-priroda-peizazh-kappadokiia-skaly-vozdushnye-shary.jpg");
  }
`

const Div = styled.div`
	width: 1500px;
	height: 3rem;
	display: flex;
	justify-content: space-around;
	border: 1px solid grey;
`
const Button = styled.button`
	border: none;
	padding: 15px 32px;
	display: inline-block;
	font-size: 13px;
	border-radius: 5px;
	margin: 0 10rem;
	background-color: #0079bf;
	color: #fff;
`
const Image = styled.img`
	width: 80px;
	height: 40px;
`

function Header() {
	const navigate = useNavigate()
	const isAuth = useSelector((state) => console.log(state.auth))
	console.log(isAuth)

	return (
		<>
			<GlobalStyle />
			<Div>
				<Image src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png'></Image>
				<Button onClick={() => navigate('/')}>Logout</Button>
			</Div>
		</>
	)
}

export default Header

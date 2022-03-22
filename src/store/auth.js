import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = [
	{
		email: 'daana@gmail.com',
		password: 'daana',
	},
]

const authSlice = createSlice({
	name: 'authentication',
	initialState: initialAuthState,
	reducers: {},
})
export const authActions = authSlice.actions

export default authSlice

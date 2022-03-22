import { createSlice } from '@reduxjs/toolkit'
import authSlice from './auth'

const newListSlice = createSlice({
	name: 'list',
	initialState: [],
	reducers: {
		addItemToCart(state, action) {
			const newList = {
				name: action.payload.name,
				id: action.payload.id,
				list: [],
			}
			state.push(newList)
		},
		// showToggle(state){
		// 	state.showToggle=true

		addCardItem(state, action) {
			const newItem = action.payload
			console.log(newItem.task)
			state.map((todo) => {
				if (todo.id === newItem.id) {
					todo.list.push(newItem)
				}
				return todo
			})
		},
	},
})

export const listActions = newListSlice.actions
export default newListSlice

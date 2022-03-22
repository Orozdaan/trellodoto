import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth'
import projectSlice from './project'
import newListSlice from './newList'
const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		project: projectSlice.reducer,
		newList: newListSlice.reducer,
	},
})
export default store

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'
const initialState = {
    user: {},
    loading: false,
    status: 'idle',
    error: null
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (username) => {
    const response = await Axios(`https://api.github.com/users/${username}`)
    return response.data
})

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    extraReducers: {
        [fetchUser.fulfilled]: (state, action) => {
            state.status = 'fullfilled';
            state.user = action.payload
            state.loading = false
            state.error = null

        },
        [fetchUser.pending]: (state, action) => {
            state.status = 'pending';
            state.loading = true
        },
        [fetchUser.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message
            state.loading = false
        }
    }
})


export const selectUser = (state) => state.users.user
export default userSlice.reducer
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Axios from 'axios'
const initialState = {
    repos : [],
    loading : false,
    status : 'idle',
    error : null
}

export const fetchRepos = createAsyncThunk('repos/fetchRepos', async (username) =>{
    const response = await Axios(`https://api.github.com/users/${username}/repos`)
    return response.data
})

const repoSlice = createSlice({
    name:'repos',
    initialState: initialState,
    reducers:{
        toggleLoading(state){
            state.loading = !state.loading
        }
    },
    extraReducers: {
        [fetchRepos.fulfilled]: (state, action) => {
            state.status = 'fullfilled';
            state.repos=action.payload
            state.loading=false
        },
        [fetchRepos.pending]: (state, action) => {
            state.status = 'pending';
            state.loading = true
        },
        [fetchRepos.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error=action.payload
            state.loading=false
        }
    }
})

export const {toggleLoading,apiError} =repoSlice.actions


export const selectRepos = (state) => state.repos.repos
export default repoSlice.reducer
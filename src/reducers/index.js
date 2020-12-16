import { combineReducers } from '@reduxjs/toolkit'
import repoReducers from './repoReducers'
import userReducers from './userReducers'

const rootReducers = combineReducers({
    users:userReducers,
    repos:repoReducers
})

export default rootReducers
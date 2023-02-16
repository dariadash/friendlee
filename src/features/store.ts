import { combineReducers, configureStore } from '@reduxjs/toolkit'
import jsonReducer from './initJson/jsonSlice'

const rootReducer = combineReducers({
    jsonReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
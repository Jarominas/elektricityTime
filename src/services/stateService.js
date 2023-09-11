import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import { ELE, DAYS } from '../components/Body/constants'

// Redux is the same as the useState, but it works like cloud.
// With redux you can send info and state about components that is in other branch

// Like with all states there must be Initial State.
const initialState = {
      electricityPrice: null,
      gasPrice: null,
      activeChart: true,
      estGasLatest: null,
      activeEnergy: ELE,
      selectedDay: DAYS[0].value,
      errorMessage: null,
}
// Changing states in redux is ACTIONS.
export const setElectricityPrice = createAction('setElectricityPrice')
export const setGasPrice = createAction('setGasPrice')
export const setActiveChart = createAction('setActiveChart')
export const setEstGasLatest = createAction('setEstGasLatest')
export const setActiveEnergy = createAction('setActiveEnergy')
export const setSelectedDay = createAction('setSelectedDay')
export const setErrorMessage = createAction('setErrorMessage')

// In redux, state that must be changed we discribe in Reducer
const reducer = createReducer(initialState, (builder) => {
      builder
            .addCase(setElectricityPrice, (state, action) => {
                  // reducer is a function that starts with actions inicialization.
                  // reducer function takes 2 argumenst:
                  // 1.All states
                  // 2.Info from action that is object with 2 options :
                  // 1. type = is name of action (ex. setGasPrice)
                  // 2. payload = data that we give to action.
                  state.electricityPrice = action.payload
            })
            .addCase(setGasPrice, (state, action) => {
                  state.gasPrice = action.payload
            })
            .addCase(setActiveChart, (state, action) => {
                  state.activeChart = action.payload
            })
            .addCase(setEstGasLatest, (state, action) => {
                  state.estGasLatest = action.payload
            })

            .addCase(setActiveEnergy, (state, action) => {
                  state.activeEnergy = action.payload
            })
            .addCase(setSelectedDay, (state, action) => {
                  state.selectedDay = action.payload
            })
            .addCase(setErrorMessage, (state, action) => {
                  state.errorMessage = action.payload
            })
})

// cloud that keeps all info about states is called STORE

export const store = configureStore({ reducer })

import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import { ELE, DAYS } from '../components/Body/constants'

const initialState = {
      electricityPrice: null,
      gasPrice: null,
      activeChart: true,
      estGasLatest: null,
      activeEnergy: ELE,
      selectedDay: DAYS[0].value,
}

export const setElectricityPrice = createAction('setElectricityPrice')
export const setGasPrice = createAction('setGasPrice')
export const setActiveChart = createAction('setActiveChart')
export const setEstGasLatest = createAction('setEstGasLatest')
export const setActiveEnergy = createAction('setActiveEnergy')
export const setSelectedDay = createAction('setSelectedDay')

const reducer = createReducer(initialState, (builder) => {
      builder
            .addCase(setElectricityPrice, (state, action) => {
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
})

export const store = configureStore({ reducer })

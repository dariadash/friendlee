import { createSlice } from '@reduxjs/toolkit'

interface JsonState {
    data: {
        autoPrice: string,
        initialFee: string,
        leasingTerm: string,
        leasingAmount: string,
        monthlyPayment: string,
    },
    buttonDisabled: boolean
}

const initialState: JsonState = {
    data: {
        autoPrice: '',
        initialFee: '',
        leasingTerm: '',
        leasingAmount: '',
        monthlyPayment: '',
    },
    buttonDisabled: false
}

export const jsonSlice = createSlice({
    name: 'json',
    initialState,
    reducers: {
        createJson: (state, action) => {
            state.data = action.payload
            state.buttonDisabled = true
            alert(JSON.stringify(state.data))
        },
    },
})

export const { createJson } = jsonSlice.actions

export default jsonSlice.reducer
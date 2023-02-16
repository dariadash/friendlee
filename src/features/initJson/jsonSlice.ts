import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface JsonState {
    autoPrice: string,
    initialFee: string,
    leasingTerm: string,
    leasingAmount: string,
    monthlyPayment: string,
}

const initialState: JsonState = {
    autoPrice: '',
    initialFee: '',
    leasingTerm: '',
    leasingAmount: '',
    monthlyPayment: '',
}

export const jsonSlice = createSlice({
    name: 'json',
    initialState,
    reducers: {
        createJson: (state, action: PayloadAction<JsonState>) => {
            state = action.payload
            alert(JSON.stringify(state))
        },
    },
})

export const { createJson } = jsonSlice.actions

export default jsonSlice.reducer
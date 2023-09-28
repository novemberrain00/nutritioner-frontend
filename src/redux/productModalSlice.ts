import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store';

interface ActiveProdiuctI {
    title: string,
    imgPath: string,
    description: string
}

interface ProductModalState {
    activeProductData: ActiveProdiuctI
}

const initialState: ProductModalState = {
    activeProductData: {
        title: '',
        imgPath: '',
        description: ''
    },
}

export const productModalSlice = createSlice({
  name: 'productModal',
  initialState,
  reducers: {
    setProductData: (state, action) => {
        state.activeProductData = {
            ...action.payload
        }
    }
  },
})

export const {setProductData} = productModalSlice.actions
export const activeProductData = (state: RootState) => state.productModal.activeProductData
export default productModalSlice.reducer
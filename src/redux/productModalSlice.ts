import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '../interfaces/interfaces';
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
    setProductData: (state:ProductModalState, action: PayloadAction<ActiveProdiuctI>) => {
        state.activeProductData = {
            ...action.payload
        }
    }
  },
})

export const {setProductData} = productModalSlice.actions
export const activeProductData = (state: RootState) => state.productModal.activeProductData
export default productModalSlice.reducer
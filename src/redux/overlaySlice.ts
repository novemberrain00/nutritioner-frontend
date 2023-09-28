import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

interface OverlayState {
  isShowed: boolean
}

const initialState: OverlayState = {
    isShowed: false,
}

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    changeVisibility: (state) => {
        state.isShowed = !state.isShowed
    }
  },
})

export const {changeVisibility} = overlaySlice.actions
export const isOverlayShowed = (state: RootState) => state.overlay.isShowed
export default overlaySlice.reducer
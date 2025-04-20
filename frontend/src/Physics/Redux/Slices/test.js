import { createSlice } from '@reduxjs/toolkit';



export const defaultNameSlice = createSlice({
  name: 'defaultName',
  initialState: {
    test:"test"
  },
  reducers: {

  },
});

export const { 
    
} = defaultNameSlice.actions;

export const defaultNameReducer = defaultNameSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';



export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    list:[]
  },
  reducers: {
    setList:(state,action) => {
      state.list = action.payload
    },
    addEvent:(state,action) => {
      state.list.push(action.payload)
    },
    toggleEventFavorite:(state,action) => {
      const event = state.list.find(event => event.id === action.payload)
      if(event){
        event.favorite = !event.favorite
      }
    }
  },
});

export const { 
  setList,
  addEvent,
  toggleEventFavorite
} = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
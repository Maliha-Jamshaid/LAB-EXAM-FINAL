
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDragons = createAsyncThunk('dragons/fetchData', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/dragons');
  const data = await response.json();
  return data;
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    reserveDragon: (state, action) => {
      const dragonId = action.payload;
      return state.map((dragon) =>
        dragon.id === dragonId ? { ...dragon, reserved: true } : dragon
      );
    },
    cancelDragonReservation: (state, action) => {
      const dragonId = action.payload;
      return state.map((dragon) =>
        dragon.id === dragonId ? { ...dragon, reserved: false } : dragon
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { reserveDragon, cancelDragonReservation } = dragonsSlice.actions;
export default dragonsSlice.reducer;

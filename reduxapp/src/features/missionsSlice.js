
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchData', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  return data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      return state.map((mission) =>
        mission.mission_id === missionId ? { ...mission, reserved: true } : mission
      );
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      return state.map((mission) =>
        mission.mission_id === missionId ? { ...mission, reserved: false } : mission
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;

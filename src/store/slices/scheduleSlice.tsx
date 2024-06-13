import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScheduleState {
  items: { day: number; time: string; subject: string; }[];
}

const initialState: ScheduleState = {
  items: []
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setSchedule(state, action: PayloadAction<ScheduleState>) {
      state.items = action.payload.items;
    }
  }
});

export const { setSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;
import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface Lesson {
  date: Date;
  title: string;
}

interface CalendarState {
  currentMonth: number;
  currentYear: number;
  selectedDate: Date | null;
  lessons: Lesson[];
}


const initialState:CalendarState = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  selectedDate: null,
  lessons: [
    ...generateLessons(new Date(2024, 0, 1), new Date(2024, 11, 31))
  ],
};

function generateLessons(startDate: Date, endDate: Date) {
  const lessons = [];
  const lessonTitle = "Ментальная арифметика";
  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 2)) {
    const lessonDate = new Date(d);
    lessonDate.setHours(13, 0, 0, 0); 
    lessons.push({ date: new Date(lessonDate), title: lessonTitle });
  }
  return lessons;
}


const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setLessons: (state, action) => {
      state.lessons = action.payload;
    },
    setPreviousMonth: (state) => {
      if (state.currentMonth === 0) {
        state.currentMonth = 11;
        state.currentYear -= 1;
      } else {
        state.currentMonth -= 1;
      }
    },
    setNextMonth: (state) => {
      if (state.currentMonth === 11) {
        state.currentMonth = 0;
        state.currentYear += 1;
      } else {
        state.currentMonth += 1;
      }
    },
    setToday: (state) => {
      const today = new Date();
      state.currentMonth = today.getMonth();
      state.currentYear = today.getFullYear();
    },
    setSelectedDate: (state, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload;
    },
  }
});

export const { setLessons, setPreviousMonth, setNextMonth, setToday } = calendarSlice.actions;
export default calendarSlice.reducer;

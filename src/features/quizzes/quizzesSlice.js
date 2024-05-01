import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  quizzes: {},
};

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuiz(state, action) {
      const { id, ...quizData } = action.payload;
      state.quizzes[id] = { id, ...quizData };
    },
  },
});

export const selectQuizzes = (state) => state.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export const quizzesReducer = quizzesSlice.reducer;

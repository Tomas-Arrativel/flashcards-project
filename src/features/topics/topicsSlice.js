import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: {},
};

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic(state, action) {
      const { id, ...topicData } = action.payload;
      state.topics[id] = { id, ...topicData, quizIds: [] };
    },
  },
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;
export const topicsReducer = topicsSlice.reducer;

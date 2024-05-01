import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: {},
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action) {
      const { id, ...cardData } = action.payload;
      state.cards[id] = { id, ...cardData };
    },
  },
});

export const selectCards = (state, action) => state.cards[action.payload.id];
export const cardsReducer = cardsSlice.reducer;

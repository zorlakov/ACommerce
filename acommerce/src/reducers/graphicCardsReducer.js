import ITEM_DATA from '../mockData/graphicCards';

const INITIAL_STATE = {
  items: ITEM_DATA,
};

export const graphicsCardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

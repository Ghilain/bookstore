const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const categoriesReducer = { categories: [], showState: false };
export const checkStatus = () => ({
  type: CHECK_STATUS,
  showState: false,
});

const checkReducer = (state = categoriesReducer, { type }) => {
  switch (type) {
    case CHECK_STATUS:
      return { categories: ['Under Construction...'] };
    default:
      return state;
  }
};

export default checkReducer;

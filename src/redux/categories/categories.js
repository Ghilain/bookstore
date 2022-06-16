const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = () => (dispatch) => {
  dispatch({ type: CHECK_STATUS });
};

const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        text: 'Under construction',
      };
    default:
      return state;
  }
};
export default categoryReducer;

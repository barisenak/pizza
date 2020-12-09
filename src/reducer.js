const initialState = {
  number: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTER": {
      return { ...state, number: state.number + 1 };
    }

    case "MINUS": {
      return { ...state, number: state.number - 1 };
    }

    default:
      return state;
  }
};

export default reducer;

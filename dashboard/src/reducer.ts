const initialState = {
  showMenu: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "SET_SHOW_MENU") {
    return { ...state, showMenu: !action.payload };
  }

  return state;
};

export default reducer;

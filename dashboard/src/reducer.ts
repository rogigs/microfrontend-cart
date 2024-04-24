const initialState = {
  showMenu: false,
  cart: [],
};

const reducer = (state = initialState, action: any) => {
  if (action.type === "SET_SHOW_MENU") {
    return { ...state, showMenu: !action.payload };
  }

  if (action.type === "SET_PRODUCTS_CART") {
    const auxCart = state.cart;
    auxCart.push(action.payload as never);
    return { ...state, cart: auxCart };
  }

  if (action.type === "SET_QUANTITY_ITEM") {
    const idxItem = state.cart.findIndex(({ id }) => {
      return id === action.payload.id;
    });

    if (idxItem === -1) {
      return state;
    }

    const auxCart: any = state.cart;
    auxCart[idxItem] = {
      ...auxCart[idxItem],
      quantity: action.payload.quantity,
    };

    return { ...state, cart: auxCart };
  }

  return state;
};

export default reducer;

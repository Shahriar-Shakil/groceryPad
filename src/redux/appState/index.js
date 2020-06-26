const initialState = {
  products: []
};

const appState = (state = initialState, {type, payload}) => {
  switch (type) {
    case "LOADED_ALL_PRODUCTS": {
      return {
        ...state,
        products: payload.products
      };
    }

    default:
      return {
        ...state
      };
  }
};

export default appState;

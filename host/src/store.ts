import { Store, combineReducers, compose, createStore } from "redux";

interface RootState {
  idProducts: string[];
}

const initialState: RootState = {
  idProducts: [],
};

type Action<P> = { type: string; payload: P };

const hostReducer = (
  state: RootState = initialState,
  action: Action<string>
): RootState => {
  if (action.type === "SET_PRODUCTS") {
    const idProduct = action.payload;
    const hasProduct = state.idProducts.find((id) => id === idProduct);

    if (hasProduct) {
      return state;
    }

    return {
      ...state,
      idProducts: [...state.idProducts, idProduct],
    };
  }

  if (action.type === "SET_REMOVE_ITEM") {
    return {
      ...state,
      idProducts: state.idProducts.filter((id) => id !== action.payload),
    };
  }

  return state;
};

const staticReducers = {
  host: hostReducer,
};

export default function configureStore(
  initialState?: RootState
): Store<RootState, Action<any>> {
  const composeEnhancers =
    typeof window === "object" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers();
  const store = createStore(createReducer(), initialState, enhancer);

  store.asyncReducers = {};

  store.injectReducer = (key: string, asyncReducer: any) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

function createReducer(asyncReducers: any) {
  return combineReducers<RootState>({
    ...staticReducers,
    ...asyncReducers,
  });
}

export const store = configureStore();

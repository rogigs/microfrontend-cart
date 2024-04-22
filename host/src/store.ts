import { Store, combineReducers, compose, createStore } from "redux";

interface RootState {
  appName: string;
}

const initialState: RootState = {
  appName: "dashboard",
};

type Action = { type: string };

const hostReducer = (
  state: RootState = initialState,
  action: Action
): RootState => {
  switch (action.type) {
    default:
      return state;
  }
};

const staticReducers = {
  host: hostReducer,
};

export default function configureStore(
  initialState?: RootState
): Store<RootState, Action> {
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

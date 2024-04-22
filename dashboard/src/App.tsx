import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./index.scss";
import reducer, { changeAppNameAction } from "./reducer";

const remoteAppScope = "dashboard";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => {
    console.log(state);
    return state[remoteAppScope];
  });
  const [remoteAppInput, setRemoteAppInput] = useState("");

  return (
    <div style={{ marginTop: "10px" }}>
      <div>RemoteApp</div>
      <div>
        RemoteApp's name from the redux store : {state && state.appName}
      </div>

      <div>
        <input
          style={{ marginRight: "10px" }}
          type="text"
          onChange={(e) => {
            setRemoteAppInput(e.target.value);
          }}
        />
        <button onClick={() => dispatch(changeAppNameAction(remoteAppInput))}>
          Dispatch RemoteApp new name
        </button>
      </div>
    </div>
  );
};

const AppWrapper = (props) => {
  console.log("🚀 ~ AppWrapper ~ props:", props);
  const { store } = props;
  useEffect(() => {
    store.injectReducer(remoteAppScope, reducer);
  }, []);

  return (
    <Provider store={store || {}}>
      <App />
    </Provider>
  );
};

export default AppWrapper;

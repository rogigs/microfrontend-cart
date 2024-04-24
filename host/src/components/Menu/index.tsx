import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";

const Dashboard = React.lazy(() => import("dashboard/App"));

export const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state["host"].idProducts);
  const showMenu = useSelector((state: any) => state.dashboard?.showMenu);

  const handleMenu = () =>
    dispatch({ type: "SET_SHOW_MENU", payload: showMenu });

  return (
    <>
      <button onClick={handleMenu} className="relative">
        <div className="rounded-full w-10 h-10 border-solid border-2 border-black flex items-center justify-center pb-2">
          <div className="relative py-2 flex align">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                {products.length}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="file: mt-4 h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </button>
      <Suspense fallback={"loading..."}>
        <Dashboard store={store} />
      </Suspense>
    </>
  );
};

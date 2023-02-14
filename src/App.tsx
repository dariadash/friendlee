import React from "react";
import { useAppDispatch, useAppSelector } from "./features/hooks";
import { decrement, increment } from "./features/calculator/initSlice";

export function App() {
    const count = useAppSelector((state) => state.initReducer.value)
    const dispatch = useAppDispatch()
    return (
        <div>
            <header>WELCOME TO NOTHING!!! 🤗 Create your App :3</header>
            <div>{count}</div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}
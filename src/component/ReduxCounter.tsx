import { Provider, useDispatch, useSelector } from "react-redux";
import { store, type AppDispatch, type RootState } from "../redux-toolkit/store";
import { decremented, incremented } from "../redux-toolkit/counterSlice";

const ReduxCounter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();


    return (
        <>
            <button
                type="button"
                className="counter"
                onClick={() => dispatch(decremented())}
            >
                -
            </button>

            <button type="button" className="counter">
                {count}
            </button>

            <button
                type="button"
                className="counter"
                onClick={() => dispatch(incremented())}
            >
                +
            </button>
        </>
    )
}

export const ReduxCounterPage = () => {
    return (
        <Provider store={store}>
            <ReduxCounter />
        </Provider>
    )
}
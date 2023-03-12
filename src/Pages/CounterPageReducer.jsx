import React, {useReducer} from 'react';
import {Panel} from "../Components";

const reducer = (state, action) => {
    let newCount;
    switch (action.type) {

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case CHANGE_VALUE:
            return {
                ...state,
                valueToAdd: action.payload,
            }
        case ADD_VALUE:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            }
        default:
            throw Error('Unknown action: ' + action.type);
    }

}

const [DECREMENT, INCREMENT, ADD_VALUE, CHANGE_VALUE ]= ['decrement', 'increment','add_value','change_value'];

const CounterPageReducer = ({initialCount}) => {

    const initialState = {
        count: initialCount || 0,
        valueToAdd: 0,
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const increment = () => {
        dispatch({
            type: INCREMENT,
        });
    }

    const decrement = () => {
        dispatch({
            type: DECREMENT,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE,
        });

    }

    const handleChange = (event) => {
        const val = parseInt(event.target.value) || 0;
        dispatch({
            type: CHANGE_VALUE,
            payload: val,
        });
    }

    return (
        <Panel className={'m-3'}>
            <h1 className={'text-lg'}>Count is {state.count}</h1>
            <div className={'flex'}>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="form_value">Add a lot</label>
                <input
                    name='form_value'
                    type="number"
                    className={'p-1 m-3 bg-gray-50 border border-gray-300'}
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                />
                <button>Add it!</button>
            </form>
        </Panel>
    );
};

export default CounterPageReducer;

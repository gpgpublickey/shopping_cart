import React, {useState} from 'react'

let eventWarning = "Event not implemented";

export const CounterContext = React.createContext(
    {
        count: 1,
        addCounter: () => {console.warn(eventWarning)},
        removeCounter: () => {console.warn(eventWarning)}
    }
);

export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(1);

    const addCounter = (event, increment) => {
        setCounter(increment(counter));
    }

    const removeCounter = (event, decrement) => {
        if(counter > 1) {
            setCounter(decrement(counter));
        }
    }

    const context = {
        count: counter,
        addCounter: addCounter,
        removeCounter: removeCounter
    };

    return (
        <CounterContext.Provider value={context}>
            {children}
        </CounterContext.Provider>
    );
}


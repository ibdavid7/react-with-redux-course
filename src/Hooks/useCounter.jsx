import React, {useEffect, useState} from 'react';

const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount || 0);

    const increment = () => {
        setCount((prev) => prev + 1);
    }

    useEffect(() => {
        console.log(count)
    }, [count]);

    return {
        count,
        increment,
    }
}

export default useCounter;

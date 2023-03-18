import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";

const useThunk = (thunkFunction) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingError, setLoadingError] = useState(null);

    const dispatch = useDispatch();

    const runThunkFunction = useCallback((arg) => {
        setIsLoading(true);
        dispatch(thunkFunction(arg))
            .unwrap()
            .catch((error) => setLoadingError(error))
            .finally(() => setIsLoading(false));
    }, [dispatch, thunkFunction]);

    return [runThunkFunction, isLoading, loadingError];
}

export default useThunk;
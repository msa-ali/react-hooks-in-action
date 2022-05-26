import { useEffect, useReducer } from 'react';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const ActionType = {
    Loading: 0,
    Data: 1,
    Error: 2,
}

const fetchReducer = (state, action) => {
    switch (action.type) {
        case ActionType.Loading: {
            return {
                ...state,
                loading: action.payload,
            };
        }
        case ActionType.Data: {
            return {
                ...state,
                data: action.payload,
            };
        }
        case ActionType.Error: {
            return {
                ...state,
                error: action.payload,
            };
        }
        default: return state;
    }
}

const useFetch = (url, requestInit) => {
    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        const handleFetch = async () => {
            dispatch({ type: ActionType.Loading, payload: true })
            try {
                const response = await fetch(url).then(response => response.json());
                dispatch({ type: ActionType.Data, payload: response });
            } catch (error) {
                dispatch({ type: ActionType.Error, payload: error });
            } finally {
                dispatch({ type: ActionType.Loading, payload: false });
            }
        }
        handleFetch();
    }, [url]);

    return state;
}

export default useFetch;
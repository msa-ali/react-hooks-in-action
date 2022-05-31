import { useState, useEffect, useRef, useMemo } from 'react';

const useAsync = (
    asyncFunc,
    initialParams = {},
    immediate = true
) => {
    const [loading, setLoading] = useState(immediate);
    const [data, setData] = useState(null);
    const mountedRef = useRef(true);

    const execute = useMemo(params => {
        setLoading(true)
        return asyncFunc({
            ...initialParams,
            ...params
        }).then(res => {
            if (!mountedRef.current) return null
            setData(res)
            setLoading(false)
            return res
        });
    }, [asyncFunc, setData, setLoading, initialParams]);

    useEffect(() => {
        if (immediate) {
            execute(initialParams)
        }
    }, [immediate, execute, initialParams]);

    useEffect(() => {
        return () => {
            mountedRef.current = false;
        }
    }, [mountedRef]);


    return { execute, loading, data }
}

export default useAsync;
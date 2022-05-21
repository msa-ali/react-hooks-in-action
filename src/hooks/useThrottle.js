/*
    Difference between deboucing and throttling is
    - A debounced function is only calledfter it has not been called for a specific duration
    - A throttled function is called once after ever timeout
*/

import { useEffect, useRef } from "react"

export const useThrottle = (fn, timeout) => {
    const previousRef = useRef(null);
    const currentRef = useRef(fn);

    if(previousRef.current !== fn) {
        currentRef.current = fn;
    }

    useEffect(() => {
        const handle = setInterval(() => {
            if(currentRef.current) {
                currentRef.current();
                previousRef.current = currentRef.current;
                currentRef.current = null;
            }
        }, timeout);

        return () => clearInterval(handle);
    }, [timeout]);
}
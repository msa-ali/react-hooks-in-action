import { useEffect } from 'react';

/**
 * custom useDebounce hook
 * @param {() => void} fn function to be debounced
 * @param {*} timeout timeout in milliseconds
 */
export const useDebounce = (fn = () => {}, timeout) => {

    useEffect(() => {
        const handle = setTimeout(fn, timeout);
        return () => clearTimeout(handle)
    }, [fn, timeout])
}
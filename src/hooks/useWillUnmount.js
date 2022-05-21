
import { useEffect, useRef } from 'react';

/**
 * Hook to tell us when a component is about to get unmounted. Use-case: save changes before unmounting
 * @param {Function} fn function to be executed before unmounting
 */
export const useWillUnmount = (fn = () => { }) => {
    // Use a ref so there are no dependencies
    const functionRef = useRef(fn);
    functionRef.current = fn;
    
    useEffect(() => {
        // Execute the passed code in the effect cleanup
        return () => functionRef.current()
    }, []);
}
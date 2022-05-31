import { useLayoutEffect, useRef } from "react"

/**
 * Custom hook to know whether component is mounted or not
 * @returns isMounted ref object
 */
export const useIsMounted = () => {
    const isMounted = useRef(false);

    useLayoutEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        }
    }, []);

    return isMounted;
}
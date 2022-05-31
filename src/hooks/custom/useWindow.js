import { useState, useEffect } from 'react';

const useWindow = (size = 0) => {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setWidth])
    return [width, width > size]
}

export default useWindow;
import { useState } from 'react';

const useToggle = (initialStatus = false) => {
    const [status, setStatus] = useState(initialStatus)
    const toggle = (newStatus) => {
        if (newStatus === undefined) {
            setStatus(status => !status)
        } else {
            setStatus(newStatus)
        }
    }
    return [status, toggle]
}

export default useToggle;
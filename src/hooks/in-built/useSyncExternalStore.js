import { useSyncExternalStore, useState } from 'react';

let now = new Date().toLocaleTimeString();

const notifiers = new Set();

setInterval(() => {
    now = new Date().toLocaleTimeString();
    notifiers.forEach((notify) => notify());
}, 1000);

function subscribe(notify) {
    notifiers.add(notify);
    return () => notifiers.delete(notify);
}

function Component() {
    let store = useSyncExternalStore(subscribe, () => now);
    return <p>The time is: {store}</p>;
}

export default function ComponentUsingUseSyncExtenalStore() {
    const [showing, setShowing] = useState(true);
    return (
        <>
            <button onClick={() => setShowing(!showing)}>toggle</button>
            {showing && <Component />}
            <Component />
        </>
    );
}
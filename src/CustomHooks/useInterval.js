import { useEffect, useRef } from 'react'

export default (callback, delay) => {
    const savedCallback = useRef()
    // this is to remember the current callback
    useEffect(() => {
        savedCallback.current = callback
    },[callback])

    // set up the interval
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if(delay !== null) {
            const id = setInterval(tick, delay)
            return () => {
                clearInterval(id)
            }
        }
    }, [delay])

}
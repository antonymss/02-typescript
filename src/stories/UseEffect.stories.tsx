import React, {useEffect, useState} from "react"

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter}, {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>

    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        setTimeout(() => {
            console.log('SetTimeout')
            document.title = counter.toString()
        }, 1000)

    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>

    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered' + counter)

    useEffect(() => {
        console.log('Effect occurred' + counter)

        return () => {
            console.log('Reset Effect')
        }

    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter {counter}
        <button onClick={increase}>+
        </button>


    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered' + text)

    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [])

    return <>
        Typed text: {text}
    </>
}
export const SetTimeoutExample2 = () => {
    const [text, setText] = useState('')

    console.log('Component rendered' + text)

    useEffect(() => {
     const timeoutId = setTimeout(()=>{
          console.log('TIMEOUT EXPIRED')
          setText('3 second passed')
      }, 3000)
        return()=>{
          clearTimeout(timeoutId)
        }

    }, [text])

    return <>
       text: {text}
    </>
}
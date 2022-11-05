import React from "react";

const List = () => {
    const [number, setNumber] = React.useState([1, 2, 3, 4]);
    let timerRef = React.useRef();
    let timer = React.useRef();


    const addNumber = () => {
        setNumber((prev) => [...prev, prev[prev.length - 1] + 1]);
    }

    const handleScroll = () => {
        console.log();
    }

    React.useEffect(() => {
        console.log(number);
    }, [number]);

    React.useEffect(() => {
        timerRef.current.addEventListener('click', handleScroll);
    }, []);

    const removeScroll = () => {
        timerRef.current.removeEventListener('click', handleScroll);
    }

    const start = () => {
        timer.current = setInterval(addNumber, 1000);
    }

    const stop = () => {
        clearInterval(timer.current);
    }

    return (
        <div>
            <button onClick={addNumber}>Новое число</button>
            <button onClick={removeScroll}>Не следить</button>
            <button onClick={start}>Старт</button>
            <button onClick={stop}>Стоп</button>

            <ul ref={timerRef} className="list">
                {
                    number.map((n, i) => (
                        <li key={i}>{n}</li>
                    ))
                }
            </ul>


        </div>

    )
}

export default List


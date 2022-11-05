import React from "react";

const List = () => {
    const [number, setNumber] = React.useState([1, 2, 3]);
    let ulRef = React.useRef();
    let timer = React.useRef();
    let numberUseref = React.useRef();
    numberUseref.current = number;

    const addNumber = () => {
        setNumber((prev) => [...prev, prev[prev.length - 1] + 1]);
    }

    const handleScroll = React.useCallback(() => {
        console.log('will by scroll', numberUseref.current);
    }, []);

    React.useEffect(() => {
        console.log(ulRef);
        ulRef.current.addEventListener('click', handleScroll);
    }, []);

    React.useEffect(() => {
        console.log(ulRef);
    }, [number]);

    const addScroll = () => {
        ulRef.current.addEventListener('click', handleScroll);
    }

    const removeScroll = () => {
        ulRef.current.removeEventListener('click', handleScroll);
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
            <button onClick={addScroll}>Cледить</button>
            <button onClick={removeScroll}>Не следить</button>
            <button onClick={start}>Старт</button>
            <button onClick={stop}>Стоп</button>

            <ul ref={ulRef} className="list">
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


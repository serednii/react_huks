import React from "react";

const List = () => {
    const [number, setNumber] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    let ulRef = React.useRef();

    const addNumber = () => {
        const lastNumber = number[number.length - 1];
        setNumber([...number, lastNumber + 1]);
        setNumber((prev) => [...prev, prev[prev.length - 1] + 1]);
    }

    const handleScroll = () => {
        console.log('will by scroll');
    }
    let timer;

    React.useEffect(() => {

        console.log(ulRef);
        ulRef.current.addEventListener('click', handleScroll);
        // ulRef = document.querySelector('ul');
        // ulRef.addEventListener('click', handleScroll);
    }, []);

    React.useEffect(() => {
        console.log(ulRef);
    }, [number]);

    const removeScroll = () => {
        ulRef.current.removeEventListener('click', handleScroll);
    }

    const start = () => {
        timer = setInterval(addNumber, 1000);
    }

    const stop = () => {
        clearInterval(timer);
    }

    return (
        <div>
            <button onClick={addNumber}>Новое число</button>
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


import React from "react";

// class List extends React.Component {
//     state = {
//         number: [1, 2, 3],
//     };

// addRandomNumber = () => {
//     const randNumber = Math.round(Math.random() * 100);
//     this.setState({
//         number: [...this.state.number, randNumber],
//     });
// };

// componentDidMount() {
//     console.log('Компонент бил отображон')
// }

// componentDidUpdate(prevProps, prevState) {
//     console.log(prevProps)
//     console.log(prevState)
//     console.log(this.props)
//     console.log(this.state)
// }

// componentWillUnmount() {
//     console.log('Component wiil by deleted')
// }

//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.state.number.map((n, i) => (
//                             <li key={i}>{n}</li>
//                         ))
//                     }
//                 </ul>
//                 <button onClick={this.addRandomNumber}>Новое число</button>
//             </div >
//         )
//     }
// }


const List = () => {
    const [number, setNumber] = React.useState([1, 2, 3, 5, 7, 4, 5, 6, 7, 8, 9]);
    const [filterNumber, setFilterNumber] = React.useState();
    const [count, setCount] = React.useState(0);


    const numberAdd = () => {
        const n = Math.round((Math.random() * 1000));
        setNumber([...number, n]);
    }

    const filter = (value) => {
        // debugger;
        setFilterNumber(+value)
    }

    React.useEffect(() => {
        console.log('the component count  was update');
    }, [count]);

    React.useEffect(() => {
        console.log('the component number  was update');
    }, [number]);
    React.useEffect(() => {
        console.log('the component   was update');
    });

    React.useEffect(() => {
        console.log('the component was displayed');
        return () => {
            console.log('component deleted')
        }
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={numberAdd}>Новое число</button>
            <ul>
                {
                    number.filter((n) => filterNumber ? (n === filterNumber) : (true))
                        .map((n, i) => (
                            <li key={i}>{n}</li>
                        ))
                }
            </ul>

            <textarea onChange={(e) => filter(e.target.value)}></textarea>
        </div>

    )
}

export default List


import './History.css'

const History = (props) => {

    function handler(event) {
        props.setState(+event.target.id);
    }

    return (    
        <div className='moveDiv'>{props.moves.map((move) => {
            return (
                <button className='moveBtn' id={move.id} key={move.id} onClick={handler}>{move.move}</button>
            );
        })}</div>
    );
}

export default History;
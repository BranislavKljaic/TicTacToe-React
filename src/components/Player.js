import './Player.css'

const Player = (props) => {
    return (
        <p className="player">{props.player} total: {props.counter}.</p>
    );
}

export default Player;
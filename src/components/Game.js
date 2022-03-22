import React, { useState } from "react";
import Field from "./Field";
import Board from "./UI/Board";
import checkIsWin from './Helpers/Helpers'
import Player from "./Player";

import './Game.css'

const Game = () => {

    const [arrayOfSymbols, setArrayOfSymbols] = useState(['', '', '', '', '', '', '', '', '']);
    const [arrayOfDisabledButtons, setArrayOfDisabledButtons] = useState([false, false, false, false, false, false, false, false, false,]);
    const [checkState, setCheckState] = useState(true);
    const [resetGameDisable, setResetGameDisable] = useState(true);
    const [winX, setWinX] = useState(+0);
    const [winO, setWinO] = useState(+0);
    const [draw, setDraw] = useState(+0);

    const changeSymbolHandler = (index) => {
        if (checkState) {
            arrayOfSymbols[+index] = 'X';
            arrayOfDisabledButtons[+index] = true;
            setCheckState(false);

            if (checkIsWin(arrayOfSymbols)) {
                setArrayOfDisabledButtons([true, true, true, true, true, true, true, true, true]);
                setResetGameDisable(false);
                setWinX(prevState => prevState + 1);
            }
        } else if (!checkState) {
            arrayOfSymbols[+index] = 'O';
            arrayOfDisabledButtons[+index] = true;
            setCheckState(true);

            if (checkIsWin(arrayOfSymbols)) {
                setArrayOfDisabledButtons([true, true, true, true, true, true, true, true, true]);
                setResetGameDisable(false);
                setWinO(prevState => prevState + 1);
            }
        }
        if(!arrayOfSymbols.includes('')){
            setDraw(prevState => prevState + 1);
            setResetGameDisable(false);
        }
    }

    const resetGame = () => {
        setArrayOfSymbols(['', '', '', '', '', '', '', '', '']);
        setArrayOfDisabledButtons([false, false, false, false, false, false, false, false, false]);
        setCheckState(true); // X always go first, without this line of code, after every game, first player changes
        setResetGameDisable(true);
    }

    return (
        <Board className='mainBoard'>
            <div>
                <div>
                    <Field value={arrayOfSymbols[0]} changeSymbolHandler={() => changeSymbolHandler(0)} disabled={arrayOfDisabledButtons[0]} />
                    <Field value={arrayOfSymbols[1]} changeSymbolHandler={() => changeSymbolHandler(1)} disabled={arrayOfDisabledButtons[1]} />
                    <Field value={arrayOfSymbols[2]} changeSymbolHandler={() => changeSymbolHandler(2)} disabled={arrayOfDisabledButtons[2]} />
                </div>
                <div>
                    <Field value={arrayOfSymbols[3]} changeSymbolHandler={() => changeSymbolHandler(3)} disabled={arrayOfDisabledButtons[3]} />
                    <Field value={arrayOfSymbols[4]} changeSymbolHandler={() => changeSymbolHandler(4)} disabled={arrayOfDisabledButtons[4]} />
                    <Field value={arrayOfSymbols[5]} changeSymbolHandler={() => changeSymbolHandler(5)} disabled={arrayOfDisabledButtons[5]} />
                </div>
                <div>
                    <Field value={arrayOfSymbols[6]} changeSymbolHandler={() => changeSymbolHandler(6)} disabled={arrayOfDisabledButtons[6]} />
                    <Field value={arrayOfSymbols[7]} changeSymbolHandler={() => changeSymbolHandler(7)} disabled={arrayOfDisabledButtons[7]} />
                    <Field value={arrayOfSymbols[8]} changeSymbolHandler={() => changeSymbolHandler(8)} disabled={arrayOfDisabledButtons[8]} />
                </div>
                <button className="resetButton" onClick={resetGame} disabled={resetGameDisable}>Reset game</button>
                <Player player={'X'} counter={winX} />
                <Player player={'O'} counter={winO} />
                <Player player={'Draw'} counter={draw} />
            </div>
        </Board>
    );
};

export default Game;
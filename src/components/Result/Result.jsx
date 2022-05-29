import { useState, useEffect } from 'react';
import YouWin from './assets/you-win.png';
import YouLose from './assets/you-lose.png';
import Draw from './assets/draw.png';
import s from './Result.module.css';

const Result = ({ type, handleStartGame }) => {
    const [url, setUrl] = useState(null);

    useEffect(() => {
        switch (type) {
            case 'win':
                setUrl(YouWin);
                break;
            case 'lose':
                setUrl(YouLose);
                break;
            case 'draw':
                setUrl(Draw);
                break;
            default:
            // setUrl(YouWin);
        }
    }, [type]);

    return (
        <div className={s.wrap}>
            <div className={s.result}>
                <img src={url} alt="result" />
                <div className={s.buttonWrap}>
                    <button onClick={handleStartGame}>Finish Game</button>
                </div>
            </div>
        </div>
    );
};

export default Result;

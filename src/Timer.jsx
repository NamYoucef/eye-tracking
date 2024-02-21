import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import { CaretRightOutlined, PauseOutlined, RedoOutlined } from '@ant-design/icons';
import "./index.css";

const Timer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        setIsRunning(true);
        timerRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
            if (seconds === 59) {
                setSeconds(0);
                setMinutes((prevMinutes) => prevMinutes + 1);
            }
            if (minutes === 59) {
                setMinutes(0);
                setHours((prevHours) => prevHours + 1);
            }
        }, 1000);
    };

    const stopTimer = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
    };

    const resetTimer = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    const formatTime = (value) => {
        return value < 10 ? `0${value}` : `${value}`;
    };

    return (
        <div>
            <div className='timer'>
                <p className='title'>Temps écoulé :</p>
                <p className='counter'>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
                </p>
            </div>
            <div className="lab_right_buttons">
                <Button className='button' icon={!isRunning ? <CaretRightOutlined /> : <PauseOutlined />} type="primary" onClick={isRunning ? stopTimer : startTimer}>
                    {isRunning ? 'Arrêter' : 'Démarrer'}
                </Button>
                <Button className='button' icon={<RedoOutlined />} type="default" onClick={resetTimer}>
                    Réinitialiser
                </Button>
            </div>
        </div>
    );
};

export default Timer;

import React, { useRef, useState, useEffect } from "react";
import { Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import Timer from './Timer';
import labyrinthe_1 from './assets/labyrinthe_1.jpeg';
import labyrinthe_2 from './assets/labyrinthe_2.jpeg';
import labyrinthe_3 from './assets/labyrinthe_3.png';
import "./index.css";


const DrawingCanvas = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [nbError, setNbError] = useState(0);
    const [active, setActive] = useState(1);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const image = new Image();
        image.src = './assets/labyrinthe_1.jpeg';
        image.onload = () => {
            context.drawImage(labyrinthe_1, 0, 0, canvas.width, canvas.height);
        };


        const startDrawing = (e) => {
            setIsDrawing(true);
            context.beginPath();
            context.moveTo(
                e.clientX - canvas.offsetLeft,
                e.clientY - canvas.offsetTop
            );
        };

        const endDrawing = () => {
            setIsDrawing(false);
            context.closePath();
        };

        const draw = (e) => {
            if (!isDrawing) return;

            context.lineTo(
                e.clientX - canvas.offsetLeft,
                e.clientY - canvas.offsetTop
            );
            context.stroke();
        };

        canvas.addEventListener("mousedown", startDrawing);
        canvas.addEventListener("mouseup", endDrawing);
        canvas.addEventListener("mousemove", draw);

        return () => {
            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mouseup", endDrawing);
            canvas.removeEventListener("mousemove", draw);
        };
    }, [isDrawing]);

    useEffect(() => {
        loadImage()
    }, [])

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        setNbError(nbError + 1)
        loadImage()
    };

    const loadImage = (value) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const image = new Image();
        if (value) {
            setActive(value)
            if (value === 1) image.src = labyrinthe_1;
            if (value === 2) image.src = labyrinthe_2;
            if (value === 3) image.src = labyrinthe_3;
        } else {
            if (active === 1) image.src = labyrinthe_1;
            if (active === 2) image.src = labyrinthe_2;
            if (active === 3) image.src = labyrinthe_3;
        }
        image.onload = () => {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
    };

    return (
        <div className="container">
            <div className="title">
                Nombre de tentative: <span style={{ color: "red", fontWeight: 550 }}>{nbError}</span>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="lab_left_buttons">
                    <Button key={1} className="button" onClick={() => loadImage(1)} type="primary">Labyrinthe 1</Button>
                    <Button key={2} className="button" onClick={() => loadImage(2)} type="primary">Labyrinthe 2</Button>
                    <Button key={3} className="button" onClick={() => loadImage(3)} type="primary">Labyrinthe 3</Button>
                </div>
                <canvas
                    ref={canvasRef}
                    width={1000}
                    height={600}
                    className="canvas"
                >
                    <img src={labyrinthe_1} alt="" />
                </canvas>

                <Timer />

            </div>
            <div>
                <Button icon={<CloseCircleOutlined />} onClick={clearCanvas} type="primary" style={{ marginTop: 20 }}>Effacer</Button>
            </div>
        </div>
    );
};

export default DrawingCanvas;
import React, { useRef, useState, useEffect } from "react";
import { Button, Badge } from 'antd';
import { CloseCircleOutlined, ForwardOutlined } from '@ant-design/icons';
import labyrinthe_1 from './assets/labyrinthe1.png';
import labyrinthe_2 from './assets/labyrinthe2.png';
import labyrinthe_3 from './assets/labyrinthe3.png';
import labyrinthe_4 from './assets/labyrinthe4.png';
import labyrinthe_5 from './assets/labyrinthe5.png';
import labyrinthe_6 from './assets/labyrinthe6.png';
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

        const stopDrawing = () => {
            setIsDrawing(false);
        };

        const draw = (e) => {
            if (!isDrawing) return;

            const rect = canvas.getBoundingClientRect();
            const x = e.pageX - rect.left;
            const y = e.pageY - rect.top;

            context.lineTo(x, y);
            context.stroke();
        };

        canvas.addEventListener("mousedown", startDrawing);
        canvas.addEventListener("mouseup", endDrawing);
        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseleave", stopDrawing);

        return () => {
            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mouseup", endDrawing);
            canvas.removeEventListener("mousemove", draw);
            canvas.removeEventListener("mouseleave", stopDrawing);
        };
    }, [isDrawing]);

    /*useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // Dessiner la croix au centre du canvas
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const crossSize = 40; // Taille de la croix plus grande

        context.strokeStyle = "black";
        context.lineWidth = 2; // Épaisseur de la ligne
        context.beginPath();
        context.moveTo(centerX - crossSize / 2, centerY);
        context.lineTo(centerX + crossSize / 2, centerY);
        context.moveTo(centerX, centerY - crossSize / 2);
        context.lineTo(centerX, centerY + crossSize / 2);
        context.stroke();
    }, [])*/



    const displayCroix = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // Dessiner la croix au centre du canvas
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const crossSize = 40; // Taille de la croix plus grande

        context.strokeStyle = "black";
        context.lineWidth = 2; // Épaisseur de la ligne
        context.beginPath();
        context.moveTo(centerX - crossSize / 2, centerY);
        context.lineTo(centerX + crossSize / 2, centerY);
        context.moveTo(centerX, centerY - crossSize / 2);
        context.lineTo(centerX, centerY + crossSize / 2);
        context.stroke();
    }

    const loadImage = (value) => {
        clearCanvas()
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Dessiner la croix au centre du canvas
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const crossSize = 40; // Taille de la croix plus grande

        context.strokeStyle = "black";
        context.lineWidth = 2; // Épaisseur de la ligne
        context.beginPath();
        context.moveTo(centerX - crossSize / 2, centerY);
        context.lineTo(centerX + crossSize / 2, centerY);
        context.moveTo(centerX, centerY - crossSize / 2);
        context.lineTo(centerX, centerY + crossSize / 2);
        context.stroke();

        setTimeout(() => {
            const image = new Image();
            if (active && active <= 6) {
                if (value) {
                    if (active === 1) image.src = labyrinthe_1;
                    if (active === 2) image.src = labyrinthe_2;
                    if (active === 3) image.src = labyrinthe_3;
                    if (active === 4) image.src = labyrinthe_4;
                    if (active === 5) image.src = labyrinthe_5;
                    if (active === 6) image.src = labyrinthe_6;
                } else {
                    setActive(active + 1)
                    if (active === 1) image.src = labyrinthe_1;
                    if (active === 2) image.src = labyrinthe_2;
                    if (active === 3) image.src = labyrinthe_3;
                    if (active === 4) image.src = labyrinthe_4;
                    if (active === 5) image.src = labyrinthe_5;
                    if (active === 6) image.src = labyrinthe_6;
                }
                image.onload = () => {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(image, 0, 0, canvas.width, canvas.height);
                };
            }
        }, 3000);
    };



    const clearDraw = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        setNbError(nbError + 1)
        console.log('active', active)
        loadImage(active - 1)
    };
    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        displayCroix()
    };

    return (
        <div className="container">
            <div className="title">
                Labyrinthe: <span style={{ color: "red", fontWeight: 550 }}>{active - 1}/6</span>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="lab_left_buttons">
                    <Badge count={nbError || 0} className="button">
                        <Button key={2} icon={<CloseCircleOutlined />} type="primary">Clean</Button>
                    </Badge>
                    <Button icon={<ForwardOutlined />} danger onClick={() => loadImage()} type="primary" style={{ marginTop: 20, fontWeight: 500, marginRight: 40 }}>Next</Button>

                </div>
                <canvas
                    ref={canvasRef}
                    width={1100}
                    height={650}
                    className="canvas"
                >
                    <img src={labyrinthe_1} alt="" />
                </canvas>

            </div>
            <div>
            </div>
        </div>
    );
};

export default DrawingCanvas;
import React from 'react';
import "./index.css";
import { CheckCircleOutlined } from '@ant-design/icons';

const Finish = () => {
    return (
        <div className="container">
            <h1>Test de labyrinthe</h1>
            <div style={{ display: 'flex' }}>
                <div className='finish'>
                    <span className='txt2' style={{ fontSize: 28 }}>Félicitations !</span>
                    <span className='txt2'> Vous avez réussi à résoudre les labyrinthes avec succès !
                    </span>
                    <CheckCircleOutlined style={{ color: '#2ecc71', fontSize: 50, marginTop: 20 }} />
                    <span className='text3'>Merci d'avoir participer</span>
                </div>

            </div>
        </div>
    )
}

export default Finish
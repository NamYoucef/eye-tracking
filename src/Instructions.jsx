import React from 'react';
import { Badge, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import "./index.css";

const Instructions = ({ setDisplay }) => {
    return (
        <div className='global'>
            <div className='container_1'>
                <h1 className='title_1'>Consignes :</h1>
                <div className='txt'>
                    Six labyrinthes, précédés d'une croix qu'il vous faudra fixer durant trois secondes, vont vous être présentés les uns après les autres.<br />
                    Votre objectif et de les résoudre le plus rapidement possible.<br />
                    Une fois le chemin trouvé, il vous est demandé de le dessiner à l'aide de votre souris (Il suffit de maintenir le clic gauche appuyé sur le labyrinthe pour qu'un trait se dessine).<br />
                    Une fois le labyrinthe résolu, appuyez sur le bouton "Suivant" en haut à gauche pour passer au labyrinthe suivant.<br />
                </div>
                <div className='txt1'>Pour débuter le test, appuyez sur le boutton "Commencer"</div>
                <Badge count={0} className="button">
                    <Button key={2} icon={<CaretRightOutlined />} onClick={() => setDisplay(true)} type="primary">Commencer</Button>
                </Badge>
            </div>
        </div>
    )
}

export default Instructions
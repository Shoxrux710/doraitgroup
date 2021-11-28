import React from 'react'
import minus from '../../../img/minus.png'
import square from '../../../img/square.png'
import close from '../../../img/close.png'
import game from '../../../img/game.png'
import './game.css'
import { Link } from 'react-router-dom'
import "react-minesweeper/lib/minesweeper.css";
import Minesweeper from 'react-minesweeper'

const Game = (props) => {

    const { setMiniGame } = props

    return (
        <div className='game-modal-wrapper'>
            <div className='top-panel'>
                <div className='left'>
                    <img src={game} alt='calc' />
                    <span>Minesweeper</span>
                </div>
                <div className='right'>
                    <div className='square'  style={{cursor: "not-allowed"}}>
                        <img src={minus} alt='close icon' />
                    </div>
                    <div className='square'  style={{cursor: "not-allowed"}}>
                        <img src={square} alt='close icon' />
                    </div>
                    <Link to='/then' className='square' onClick={() => setMiniGame(false)} >
                        <img src={close} alt='close icon'/>
                    </Link>
                </div>
            </div>

            <div className='body-panel'>
            <Minesweeper
                onWin={() => console.log("GAME WON")}
                onLose={() => console.log("GAME LOST")}
                bombChance={0.15} 
                width={10} 
                height={10} 
            />
            </div>
        </div>
    )
}

export default Game

import React, { useState } from 'react'
import './calculator.css'
import calculator from '../../../img/calculator.png'
import minus from '../../../img/minus.png'
import square from '../../../img/square.png'
import close from '../../../img/close.png'
import { Link } from 'react-router-dom'

const Calculator = (props) => {

    const { setCalc } = props

    const [ result, setResult ] = useState("")
    const [ m, setM ] = useState("")

    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }

    const clear = () => {
        setResult("")
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1))
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())
        }
        catch(err) {
            setResult("Error")
        }
    }
    
    const mPlus = () => {
        setM(result)
    }

    const mR = () => {
        setResult(m)
    }

    const mS = () => {
        setM('')
    }

    const sqrt = () => {
        setResult(Math.pow(result, 1/2).toString())
    }

    const x = () => {
        setResult((1/result).toString())
    }

    return (
        <div className='calculator-modal-wrapper'>
            <div className='calculator-modal'>
                <div className='top-panel'>
                    <div className='left'>
                        <img src={calculator} alt='calc' />
                        <span>Calculator</span>
                    </div>
                    <div className='right'>
                        <div className='square'  style={{cursor: "not-allowed"}}>
                            <img src={minus} alt='close icon' />
                        </div>
                        <div className='square'  style={{cursor: "not-allowed"}}>
                            <img src={square} alt='close icon' />
                        </div>
                        <Link to='/then' className='square' onClick={() => setCalc(false)} >
                            <img src={close} alt='close icon'/>
                        </Link>
                    </div>
                </div>

                <div className='body-panel'>
                    <div className='top'>
                        <p><span>F</span>ile</p>
                        <p><span>E</span>dit</p>
                        <p><span>V</span>iew</p>
                        <p><span>H</span>elp</p>
                    </div>
                    <div className='center'>
                        <form>
                            <input type='text' value={result} readOnly />
                        </form>
                        <div className='keypad-top'>
                            <div>
                                <button></button>
                            </div>
                            <div>
                                <button onClick={backspace} id='backspace'>Back</button>
                                <button onClick={backspace} id='backspace'>CE</button>
                                <button onClick={clear} id='clear'>C</button>
                            </div>
                        </div>
                        <div className='keypad'>
                            <button name='mc' className='red-btn'>MC</button>
                            <button name='7' onClick={handleClick}>7</button>
                            <button name='8' onClick={handleClick}>8</button>
                            <button name='9' onClick={handleClick}>9</button>
                            <button name='/' onClick={handleClick} className='red-btn'>/</button>
                            <button name='sqrt' onClick={sqrt}>sqrt</button>
                            
                            <button name='mr' onClick={mR} className='red-btn'>MR</button>
                            <button name='4' onClick={handleClick}>4</button>
                            <button name='5' onClick={handleClick}>5</button>
                            <button name='6' onClick={handleClick}>6</button>
                            <button name='*' onClick={handleClick} className='red-btn'>*</button>
                            <button name='%' onClick={handleClick}>%</button>

                            <button name='ms' className='red-btn' onClick={mS}>MS</button>
                            <button name='1' onClick={handleClick}>1</button>
                            <button name='2' onClick={handleClick}>2</button>
                            <button name='3' onClick={handleClick}>3</button>
                            <button name='-' onClick={handleClick} className='red-btn'>-</button>
                            <button name='1/x' onClick={x}>1/x</button>

                            <button name='m+' onClick={mPlus} className='red-btn'>M+</button>
                            <button name='0' onClick={handleClick}>0</button>
                            <button name='-' onClick={handleClick}>+/-</button>
                            <button name='.' onClick={handleClick}>.</button>
                            <button name='+' onClick={handleClick} className='red-btn'>+</button>
                            <button name='='  onClick={calculate} id='result' className='red-btn'>=</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Calculator

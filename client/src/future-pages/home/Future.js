import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './future.css'

const Future = () => {

    const [timerDays, setTimerDays] = useState('0')
    const [timerHours, setTimerHours] = useState('0')
    const [timerMinutes, setTimerMinutes] = useState('0')
    const [timerSeconds, setTimerSeconds] = useState('0')

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 1, 2022 00:00:00').getTime()

        interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = countdownDate - now

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        if(distance < 0) {
            // stop our time
            clearInterval(interval.current)
        }
        else {
            //update timer
            setTimerDays(days)
            setTimerHours(hours)
            setTimerMinutes(minutes)
            setTimerSeconds(seconds)
        }

        }, 1000)
    }

    // componentDidMount()
    useEffect(() => {
        startTimer()
        return () => {
        clearInterval(interval)
        }
    })

    return (
        <div className='future-page'>
            <div className='op'>
                <div data-aos="zoom-out-down">
                    <section className='timer-container'>
                        <div className='days'>
                            <p className='numbers'>{timerDays}</p>
                            <span>kun</span>
                        </div>
                        <span className='dot'>:</span>
                        <div className='hours'>
                            <p className='numbers'>{timerHours}</p>
                            <span>soat</span>
                        </div>
                        <span className='dot'>:</span>
                        <div className='minutes'>
                            <p className='numbers'>{timerMinutes}</p>
                            <span>daqiqa</span>
                        </div>
                        <span className='dot'>:</span>
                        <div className='seconds'>
                            <p className='numbers'>{timerSeconds}</p>
                            <span>soniya</span>
                        </div>
                    </section>
                </div>
                <Link to='/'>
                    <div className='back'></div>
                </Link>
                <div class="loader">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                    <div class="bar4"></div>
                    <div class="bar5"></div>
                    <div class="bar6"></div>
                </div>
            </div>
        </div>
    )
}

export default Future

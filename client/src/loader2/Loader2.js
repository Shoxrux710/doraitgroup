import React, { useState, useEffect } from 'react'
import './loader.css'
import doraITLogo from '../img/dora-logo.png'

const Loader2 = () => {

    const [logo, setLogo] = useState(true)
    const [doraLogo, setDoraLogo] = useState(true)

    useEffect(() => {
        let count = 0;
        const countIntervalTime = setInterval(() => {
            count += 1;
            if (count === 2) {
                setDoraLogo(false)
            }
            if (count === 3) {
                setLogo(false)
                clearInterval(countIntervalTime)
            }
          }, 1000);
    },[])

    const loadingFlagWrapper = logo ? 'loading-flag-wrapper' : 'loading-flag-wrapper not-active'
    const logoWrap = doraLogo ? 'logo-wrap not-active-logo-wrap' : 'logo-wrap'

    return (
        <div className='all-loader-wrapper'>
            <div className={loadingFlagWrapper}>
                <div className="loading-flag-content">
                    <div className="loading-flag-flag">
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                    </div>
                    <div className="loading-flag-flag">
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                    </div>
                    <div className="loading-flag-flag">
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                    </div>
                    <div className="loading-flag-flag">
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                    </div>
                </div>
            </div>

            <div className={logoWrap}>
                <img src={doraITLogo} alt='logo' />
            </div>

            <div className='loader-hisoblagich'>
                <div className='inner-loader-hisoblagich'>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                    <div className='inner'></div>
                </div>
            </div>
        </div>
    )
}

export default Loader2

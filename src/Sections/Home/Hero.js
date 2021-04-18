import React from 'react'
import styles from './Hero.module.css'
import Button from '../../Components/UI/Button'

import { Link, animateScroll as scroll } from "react-scroll";

import heroImg from '../../Assets/developer-activity-animate.svg'
import portafolio from '../../Assets/Cv Victor final2.0 (english).pdf'

export default function Hero() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.heroWrapper + ' ' + 'max-width'}>
                <div className={styles.textContainer}>
                    <h1 className='header' >Hello, my name is Victor<span className='cyan'>.</span></h1>
                    <p className='sub-header' >
                        I'm a frontend developer from <span className='green'>Me</span>xi<span className='red' >co</span>,
                        and building websites is my passion.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            to="contact"
                            smooth={true}
                            offset={-50}
                            duration={900}
                        >
                            <Button size='lg' label='Contact me'></Button>
                        </Link>
                        <a href={portafolio} download>Download Cv</a>
                    </div>
                </div>
            </div>
            <div className={styles.heroImgContainer}>
                <img src={heroImg} alt="hero-img" />
            </div>
        </div>
    )
}

import React from 'react'
import styles from './Hero.module.css'
import Button from '../../Components/UI/Button'
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion"
import heroImg from '../../Assets/developer-activity-animate.svg'
import portafolio from '../../Assets/Cv_Victor_Obeso.pdf'

import { fadeUp2 } from '../../animations/framerMotionAnimation'

export default function Hero() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.heroWrapper + ' ' + 'max-width'}>
                <div 
                    className={styles.textContainer}
                >
                    <motion.h1 
                        className='header'
                        variants={fadeUp2}
                        initial='hidden'
                        animate='visible'
                    >
                        Hello, my name is Victor<span className='cyan'>.</span>
                    </motion.h1>
                    <motion.p 
                        className='sub-header'
                        variants={fadeUp2}
                        initial='hidden'
                        animate='visible'
                    >
                        I'm a frontend developer from <span className='green'>Me</span>xi<span className='red' >co</span>,
                        and building websites is my passion.
                    </motion.p>
                    <motion.div 
                        className={styles.buttons}
                        variants={fadeUp2}
                        initial='hidden'
                        animate='visible'
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            offset={-50}
                            duration={900}
                        >
                            <Button size='lg' label='Contact me'></Button>
                        </Link>
                        <a href={portafolio} download>Download Cv</a>
                    </motion.div>
                </div>
            </div>
            <div className={styles.heroImgContainer}>
                <img src={heroImg} alt="hero-img" />
            </div>
        </div>
    )
}

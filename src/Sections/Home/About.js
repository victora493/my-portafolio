import React, {useRef, useEffect, useCallback} from 'react'
import styles from './About.module.css'
import profilePic from '../../Assets/profile_picture.jpg'
import DividerSection from '../../Components/UI/DividerSection'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
// for animations
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp1, fadeDown1 } from '../../animations/framerMotionAnimation'

export default function About() {

    return (
        <div id='about' className={styles.mainWrapper}>
            <div className={styles.content + ' ' + 'max-width-pad'}>
                <ImgComponent/>
                <InfoComponent/>
            </div>
            <DividerSection />
        </div>
    )
}

function ImgComponent() {
    const [ ref, inView] = useInView({ rootMargin: '-60px'})
    return (
        <motion.div 
            className={styles.imgContainer}
            ref={ref}
            variants={fadeDown1}
            initial='hidden'
            animate={inView && 'visible'}
        >
            <LazyLoadImage
                src={profilePic} 
                alt="profile-pic"
                effect="opacity"
            />
        </motion.div>
    )
}

function InfoComponent() {
    const [ ref, inView] = useInView({ rootMargin: '60px'})
    return (
        <motion.div
            className={styles.textContainer}
            ref={ref}
            variants={fadeUp1}
            initial='hidden'
            animate={inView && 'visible'}
        >
            <h1>A little bit about me<span className='cyan' >.</span></h1>
            <p>

                I'm a Web Developer, I can design, create and maintain websites, using the latest industry software. 
                I've worked with startups and institutions providing an outstanding user experience. 
                Creating accessible websites that look great on any screen.
                <br /> 
                {/* I'd say developing has become my passion throughout this time and the more 
                challenging a website the more I enjoy developing that website. <br /> */}
                Some of the technologies I dominate include HTML5, CSS3, JavaScript, Git, and React.JS.
            </p>
            <motion.div 
                className={styles.iconsContainer}
                variants={fadeUp1}
                initial='hidden'
                animate={inView && 'visible'}
            >
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
                <FaGitAlt />                   
                <SiReact />                        
            </motion.div>
        </motion.div>
    )
}

import React from 'react'
import styles from './Projects.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
// for animations
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp1 } from '../../../animations/framerMotionAnimation'

export default function SingleCard({imgDesk, imgMobile, title, description, skillsArrShowcase, linksArr}) {
    const [ ref, inView] = useInView({ rootMargin: '0px'})
    return (
        <>
            <motion.div 
                className={styles.cardContaier}
                ref={ref}
                variants={fadeUp1}
                initial='hidden'
                animate={inView && 'visible'}
            >
                <div className={styles.imgContainer}>
                    <LazyLoadImage
                        src={imgDesk}
                        alt="deskoptMockup"
                        effect="opacity"
                    />
                    <div className={styles.imgContainerMobile}>
                        <LazyLoadImage
                            src={imgMobile}
                            alt="mobilepMockup"
                            effect="opacity"
                        />
                    </div>
                </div>
                <div className={styles.textContent}>
                    <h2>{title || 'no title'}</h2>
                    <p className='p2'>
                        {description || 'no description'}
                    </p>
                    <p className='p2'>
                        <strong>Technologies used:</strong>
                    </p>
                    <ul className={styles.technologiesList}>
                        {skillsArrShowcase.map((skill, i) => (                            
                            <li key={i * 20}>
                                <p>
                                    {skill}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.links}>
                    {linksArr.map((link, i) => (
                        <a key={i * 3} target='_blank' href={link}>
                            {i === 0 ? 'Visit project →' : 'View code →'}
                        </a>
                    ))}
                    </div>
                </div>
            </motion.div>
        </>
    )
}

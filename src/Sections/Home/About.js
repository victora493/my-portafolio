import React from 'react'
import styles from './About.module.css'
import profilePic from '../../Assets/profile_picture.jpg'
import DividerSection from '../../Components/UI/DividerSection'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'

export default function About() {
    return (
        <div id='about' className={styles.mainWrapper}>
            <div className={styles.content + ' ' + 'max-width-pad'}>
                <div className={styles.imgContainer}>
                    <LazyLoadImage
                        src={profilePic} 
                        alt="profile-pic"
                        effect="opacity"
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1>A little bit about me<span className='cyan' >.</span></h1>
                    <p>

                        I'm a Web Developer, I can design, create and maintain websites, using the latest industry software.
                        I've worked with startups and institutions providing an outstanding user experience.
                        <br /> 
                        {/* I'm 22 years old and currently located in Mexico. <br /> */}
                        I'd say developing has become my passion throughout this time and the more 
                        challenging a website the more I enjoy developing that website. <br />
                        Some of the technologies I dominate include:
                        HTML5, CSS3, JavaScript and React.js.
                    </p>
                    <div className={styles.iconsContainer}>
                        <SiHtml5 />
                        <SiCss3 />
                        <SiJavascript />
                        <SiReact />                        
                    </div>
                </div>
            </div>
            <DividerSection />
        </div>
    )
}

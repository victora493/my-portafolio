import React from 'react'
import styles from './Projects.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import pr1DeskoptMockup from '../../Assets/mfa-about-deskopt-mockup.png'
import pr1MobileMockup from '../../Assets/mfa-about-mobile-mockup.png'
import pr2DeskoptMockup from '../../Assets/psoa-deskopt-mockup.png'
import pr2MobileMockup from '../../Assets/psoa-mobile-mockup.png'
import pr3DeskoptMockup from '../../Assets/spacex-deskopt-mockup.png'
import pr3MobileMockup from '../../Assets/spacex-mobile-mockup.png'
import projectsArr from '../../utils/projectsArr'
import SingleCard from './SingleCard'

export default function Projects() {

    return (
        <div id='projects' className={styles.mainWrapper}>
            <div className={styles.content + ' ' + 'max-width-pad'}>
                <h1>Featured Projects:</h1>
                <p className='subtitle' >
                    These are some of my featured projects I've wroked on in the past. Most of them were made with a team of progammers and some were made only by me. 
                </p>
                <div className={styles.proyectsContainer}>
                    {/* single card */}
                    {projectsArr.map((pr, i) => (
                        <SingleCard
                            key={i}
                            imgDesk={pr.imgDesk}
                            imgMobile={pr.imgDesk}
                            title={pr.title}
                            description={pr.desc.mainDesc}
                            skillsArrShowcase={pr.desc.skills}
                            linksArr={pr.links}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

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

export default function Projects() {

    const projectsArr = [
        {
            imgDesk: pr1DeskoptMockup,
            imgMobile: pr1MobileMockup,
            title: 'Online Art School',
            desc: {
                mainDesc: 'I was in charge of the front end. It was an interesting project since i developed a lot of skills undestanding what is needed for a full stack webpage, and also I learned how to work better as a team.',
                skills: ['html, css', 'Javascript', 'Lit element', 'Firebase', 'NodeJS']
            },
            links: ['https://mfa.studio/']
        },
        {
            imgDesk: pr2DeskoptMockup,
            imgMobile: pr2MobileMockup,
            title: 'Online Art Live Conference',
            desc: {
                mainDesc: "I was in charge of the front end. This project was exciting because this website design was made by me using my experience creating both good and efficient UI/UX and also beacuse when implementing the users account section I had to implement a lot of logic.",
                skills: ['html, css', 'Javascript', 'React', 'Firebase', 'NodeJS']
            },
            links: ['https://art-of-the-portrait.netlify.app/']
        },
        {
            imgDesk: pr3DeskoptMockup,
            imgMobile: pr3MobileMockup,
            title: 'SpaceX Launches Record',
            desc: {
                mainDesc: 'This webiste was made to display the spacex lauches by fetching the data using a rest API. It was made only by me with the purpose of practicing my skills. It includes some basic features such as search, pagination, loading state, error handling and it is responsive.',
                skills: ['html, css', 'Javascript', 'React']
            },
            links: ['https://victortestspacex.netlify.app/', 'https://github.com/smartia-tech/frontend-dev-test/pull/17']
        },
    ]
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
                        <div key={i} className={styles.cardContaier}>
                            <div className={styles.imgContainer}>
                                <LazyLoadImage
                                    src={pr.imgDesk}
                                    alt="deskoptMockup"
                                    effect="opacity"
                                />
                                <div className={styles.imgContainerMobile}>
                                    <LazyLoadImage
                                        src={pr.imgMobile}
                                         alt="mobilepMockup"
                                        effect="opacity"
                                    />
                                </div>
                            </div>
                            <div className={styles.textContent}>
                                <h2>{pr && pr.title || 'no title'}</h2>
                                <p className='p2'>
                                    {pr && pr.desc.mainDesc || 'no description'}
                                    <br />
                                    <strong>Technologies used:</strong>
                                </p>
                                <ul className={styles.technologiesList}>
                                    {pr && pr.desc && pr.desc.skills.map((skill, i) => (
                                        <p>
                                            <li key={i * 20}>{skill}</li>
                                        </p>
                                    ))}
                                </ul>
                                <div className={styles.links}>
                                {pr && pr.links.map((link, i) => (
                                    <a key={i * 3} target='_blank' href={link}>
                                        {i === 0 ? 'Visit project →' : 'View code →'}
                                    </a>
                                ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

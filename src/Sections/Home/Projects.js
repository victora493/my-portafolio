import React from 'react'
import styles from './Projects.module.css'
import pr1DeskoptMockup from '../../Assets/mfa-about-deskopt-mockup.png'
import pr1MobileMockup from '../../Assets/mfa-about-mobile-mockup.png'
import pr2DeskoptMockup from '../../Assets/psoa-deskopt-mockup.png'
import pr2MobileMockup from '../../Assets/mfa-about-mobile-mockup.png'
import pr3DeskoptMockup from '../../Assets/spacex-deskopt-mockup.png'
import pr3MobileMockup from '../../Assets/spacex-mobile-mockup.png'

export default function Projects() {

    const projectsArr = [
        {
            imgDesk: pr1DeskoptMockup,
            imgMobile: pr1MobileMockup,
            title: 'Online Art School',
            desc: {
                mainDesc: 'This website is an online art school. It was made with a team of progammers and a designer. I was in charge in almost all the front end and a lot of the logic of the page.',
                skills: ['html, css', 'Javascript', 'Lit element', 'Firebase', 'NodeJS']
            },
            links: ['https://mfa.studio/']
        },
        {
            imgDesk: pr2DeskoptMockup,
            imgMobile: pr2MobileMockup,
            title: 'Online Art Conference',
            desc: {
                mainDesc: 'This website was made to host an art Conference for one of our clients. It was made with a team and I designed and coded the front end and a lot of the logic of the page.',
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
                                <img src={pr.imgDesk} alt="deskoptMockup" />
                                <div className={styles.imgContainerMobile}>
                                    <img src={pr.imgMobile} alt="mobilepMockup" />
                                </div>
                            </div>
                            <div className={styles.textContent}>
                                <h2>{pr && pr.title || 'no title'}</h2>
                                <p className='p2'>
                                    {pr && pr.desc.mainDesc || 'no description'}
                                    <br />
                                    <strong>Technologies used:</strong>
                                    <ul>
                                        {pr && pr.desc && pr.desc.skills.map((skill, i) => (
                                            <li key={i * 20}>{skill}</li>
                                        ))}
                                    </ul>
                                </p>
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

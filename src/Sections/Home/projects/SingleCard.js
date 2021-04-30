import React from 'react'
import styles from 'SingleCard.module.css'

export default function SingleCard({imgDesk, imgMobile, title, description, skillsArrShowcase, linksArr}) {
    return (
        <>
            <div className={styles.cardContaier}>
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
                        <br />
                        <strong>Technologies used:</strong>
                    </p>
                    <ul className={styles.technologiesList}>
                        {skillsArrShowcase.map((skill, i) => (
                            <p>
                                <li key={i * 20}>{skill}</li>
                            </p>
                        ))}
                    </ul>
                    <div className={styles.links}>
                    {linksArrs.map((link, i) => (
                        <a key={i * 3} target='_blank' href={link}>
                            {i === 0 ? 'Visit project →' : 'View code →'}
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}

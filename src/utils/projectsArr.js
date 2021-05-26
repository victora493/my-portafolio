import React from 'react'
import pr1DeskoptMockup from '../Assets/mfa-about-deskopt-mockup.png'
import pr1MobileMockup from '../Assets/mfa-about-mobile-mockup.png'
import pr2DeskoptMockup from '../Assets/psoa-deskopt-mockup.png'
import pr2MobileMockup from '../Assets/psoa-mobile-mockup.png'
import pr3DeskoptMockup from '../Assets/spacex-deskopt-mockup.png'
import pr3MobileMockup from '../Assets/spacex-mobile-mockup.png'

export const projectsArr = [
        {
            imgDesk: pr1DeskoptMockup,
            imgMobile: pr1MobileMockup,
            title: 'Online Art School',
            desc: {
                mainDesc: 'I was in charge of the front end(with a team). It was an interesting project since I developed a lot of skills understanding what is needed for a full-stack webpage and also I improved my teamwork skills.',
                skills: ['html, css', 'Javascript', 'Lit element', 'Firebase', 'NodeJS']
            },
            links: ['https://mfa.studio/']
        },
        {
            imgDesk: pr2DeskoptMockup,
            imgMobile: pr2MobileMockup,
            title: 'Online Art Live Conference',
            desc: {
                mainDesc: 
                    "I was in charge of the front end(with a team). This project was exciting because the design was made by me taking into account all of the users' needs and creating an interface that reinforces consistency and because I had to implement a lot of logic of the page such as in the account, reminders for users, and more.",
                skills: ['html, css', 'Javascript', 'React.JS', 'Firebase', 'NodeJS']
            },
            links: ['https://psoa2021.com/']
        },
        {
            imgDesk: pr3DeskoptMockup,
            imgMobile: pr3MobileMockup,
            title: 'SpaceX Launches Record',
            desc: {
                mainDesc: 'This website was made only by me to practice my skills. It displays all the SpaceX launches using a rest API. It includes some basic features such as search, pagination, loading state, error handling and it is responsive.',
                skills: ['html, css', 'Javascript', 'React.JS']
            },
            links: ['https://victortestspacex.netlify.app/', 'https://github.com/victora493/space-x-launches-record']
        },
    ]

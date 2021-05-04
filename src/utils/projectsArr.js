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
            links: ['https://psoa2021.com/']
        },
        {
            imgDesk: pr3DeskoptMockup,
            imgMobile: pr3MobileMockup,
            title: 'SpaceX Launches Record',
            desc: {
                mainDesc: 'This webiste was made to display the spacex lauches by fetching the data using a rest API. It was made only by me with the purpose of practicing my skills. It includes some basic features such as search, pagination, loading state, error handling and it is responsive.',
                skills: ['html, css', 'Javascript', 'React']
            },
            links: ['https://victortestspacex.netlify.app/', 'https://github.com/victora493/space-x-launches-record']
        },
    ]

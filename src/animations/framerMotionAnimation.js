export const fadeUp1 = {
        hidden: { y: 80, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 2,
                delay: .1,
            }
        },
    }
export const fadeDown1 = {
        hidden: { y: -80, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 2,
                delay: .1,
            }
        },
    }

export const fadeUp2 = {
        hidden: { y: 80, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 2,
                bounce: .3,
                stiffness: 50,
                damping: 9,
            }
        },
    }
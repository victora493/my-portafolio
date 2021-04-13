import React,{ useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import styles from './Navbar.module.css'
import myLogo from '../Assets/my_logo.png'

// icons
import { BiMenuAltRight } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'

export default function Navbar() {

    const [isNavbarTop, setIsNavbarTop] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const handleNavScroll = () => {
        if (window.scrollY >= 2) {
        setIsNavbarTop(false);
        } else {
        setIsNavbarTop(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleNavScroll);
        return () => {
        window.removeEventListener("scroll", handleNavScroll)
        }
    }, [])

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <nav className={!isNavbarTop ? styles.navActive : ''}>
                <ul className={styles.menuContainer}>
                    <div className={styles.logoContainer} onClick={scrollToTop}>
                        <img src={myLogo} alt="logo" />
                    </div>
                    <Link
                        className={styles.hideMobile}
                        activeClass={styles.active}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={900}
                        >
                        About
                    </Link>
                    <Link
                        className={styles.hideMobile}
                        activeClass={styles.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={900}
                    >
                        projects
                    </Link>
                    <Link
                        className={styles.hideMobile}
                        activeClass={styles.active}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={900}
                        >
                        Contact
                    </Link>
                    <div
                        className={styles.hideMobile}
                    >
                        {/* Night mode */}
                    </div>
                    <div
                        className={styles.menuIcon}
                        onClick={() => setShowMenu(true)}
                        >
                        <BiMenuAltRight />
                    </div>
                </ul>
            </nav>
            <drawer className={showMenu && styles.showDrawer}>
                <ul className={styles.drawerMenuContainer}>
                    <Link
                        activeClass={styles.drawerActive}
                        onClick={() => setShowMenu(false)}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={900}
                    >
                        About
                    </Link>
                    <Link
                        activeClass={styles.drawerActive}
                        onClick={() => setShowMenu(false)}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={900}
                    >
                        projects
                    </Link>
                    <Link
                        activeClass={styles.drawerActive}
                        onClick={() => setShowMenu(false)}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={900}
                    >
                        Contact
                    </Link>
                    <div
                        className={styles.nightMode}
                        onClick={() => setShowMenu(false)}
                    >
                        {/* Night mode */}
                    </div>
                    <div
                        className={styles.menuIcon}
                        onClick={() => setShowMenu(false)}
                    >
                        <IoClose />
                    </div>
                </ul>
            </drawer>
        </>
    )
}

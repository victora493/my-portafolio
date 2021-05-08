import React from 'react';
import styles from './Footer.module.css';

import myLogo from '../Assets/my_logo.png'
// icons
import { IoMailOutline, IoCallOutline, IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5'

export default function Footer() {
  return (
    <div className={styles.wrapper + ' ' + 'padding-left-right'}>
      <footer className={styles.footerContainer}>
        {/* LOGO SECTION */}
        <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
                {/* <a target="_blank" href="https://www.portraitsociety.org/"> */}
                    <img 
                      src={myLogo}
                      alt="logo" 
                    />
                {/* </a> */}
            </div>
            {/* <p>
            </p> */}
        </div>
        {/* CONTACT INFO SECTION */}
        <div className={styles.contactInfoContainer}>
          <span className={styles.decorationCircle}></span>
          <p className={styles.footerTitle}>Contact</p>
          {/* mail */}
          <a target="_blank" href="mailto: victora493@gmail.com">
            <p>
              <IoMailOutline /> victora493@gmail.com
            </p>
          </a>
          {/* celphone */}
          <a target="_blank" href="tel:+526861142588">
            <p>
              <IoCallOutline /> +52 (686) 1142588
            </p>
          </a>
          {/* fax */}
          {/* <a className={styles.noHover} target="_blank" href="fax:18502227890">
            {' '}
            <p >
              <span>Fax</span> 1-850-222-7890
            </p>
          </a> */}
          {/* Po box */}
          {/* <a className={styles.noHover} target="_blank" href="#">
            {' '}
            <p >
              <ion-icon name="location-outline"></ion-icon> P.O. Box 11272, Tallahassee, FL 32302
            </p>
          </a> */}
          {/* Adress */}
          {/* <a target="_blank" href="https://www.google.com/maps/place/1109+S+Magnolia+Dr,+Tallahassee,+FL+32301,+EE.+UU./data=!4m2!3m1!1s0x88ec5f8e4d6df70d:0x4bedd0c589f956e8?sa=X&hl=es-419&ved=2ahUKEwjjl8_p7czvAhVzGDQIHbeECDkQ8gEwAHoECAYQAQ">
            {' '}
            <p>
              <ion-icon name="location-outline"></ion-icon> 1109 S. Magnolia Drive, Tallahassee, FL 32301
            </p>
          </a> */}
        </div>
        {/* SOCIALS SECTION */}
        <div className={styles.socialsContainer}>
          <div className={styles.singleIconContainer}>
            <a
              target="_blank"
              href="https://www.facebook.com/Victor-pages-104150265133707"
            >
              < IoLogoFacebook />
            </a>
          </div>
          <div className={styles.singleIconContainer}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/victor-obeso-97554b124/"
            >
              <IoLogoLinkedin />
            </a>
          </div>
          <div className={styles.singleIconContainer}>
            <a
              target="_blank"
              href="https://github.com/victora493"
            >
              <IoLogoGithub />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

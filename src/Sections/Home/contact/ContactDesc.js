import React from 'react'
import styles from './ContactAndDesc.module.css'
// icons
import { IoMailOutline, IoLogoWhatsapp } from 'react-icons/io5'

export default function ContactDesc() {
    return (
        <>
          <div className={styles.contactInfo}>
                <h1>Get in touch!</h1>
                <p className='subtitle' >
                    Have an inquiry or a question for me? Please fill out the form to contact me and you'll 
                    receive an answer as soon as posible. <br />
                    Currently I'm open to job opportunities or freelance projects.  <br />
                </p>
                <ul className={styles.contactList}>
                        <li>
                            <a target="_blank" href="mailto: victora493@gmail.com">
                                <IoMailOutline />
                                victora493@gmail.com
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=526861142588&text=Hello!%20I'd%20like%20to%20tell%20you%20about%20my%20project">
                                <IoLogoWhatsapp/>
                                +52 (686) 1142588
                            </a>
                        </li>
                        {/* mail */}
                        {/* celphone */}
                </ul>
            </div>  
        </>
    )
}

import React from 'react'
import styles from './ContactAndDesc.module.css'
import toast, { Toaster } from 'react-hot-toast';
import Form from './Form'
import ContactDesc from './ContactDesc'

export default function Contact() {
    return (
        <div id='contact' className={styles.mainWrapper}>
            <Toaster
                toastOptions={{
                    // Define default options
                    className: '',
                    style: {
                    margin: '60px',
                    // background: '#363636',
                    // color: '#fff',
                    zIndex: 1,
                    },
                    duration: 6000,
                    // Default options for specific types
                    error: {
                    duration: 8000,
                    },
                }}
            />
            <div className={styles.content + ' ' + 'max-width-pad'}>
                <ContactDesc/>
                <Form
                    toast={toast}
                />
            </div>
        </div>
    )
}

import React from 'react'
import styles from './Contact.module.css'
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import Input from '../../Components/UI/Input'
import Button from '../../Components/UI/Button'
import Textarea from '../../Components/UI/Textarea'

// icons
import { IoMailOutline, IoLogoWhatsapp } from 'react-icons/io5'

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };
    
    function sendEmail(e) {
        e.preventDefault();
        reset()
        
        emailjs.sendForm('service_zjgajro', 'template_hfop2mj', e.target, 'user_tthIIXrCt6pokeLnLSWQB')
        .then((result) => {
            toast.success('thank you! Your information was submitted correctly')
            console.log(result.text);
        }, (error) => {
            toast.error("I'm sorry:( there was an error, please try again later")
            console.log(error.text);
        });
    }

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
                <div className={styles.contactForm}>
                    <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles.box}>
                        <div className={styles.row}>
                            <Input
                                validation={
                                    {
                                        required: { value: true, message: 'This is required' },
                                    }
                                }
                                errors={errors}
                                name="from_name"
                                register={register}
                            />
                            <Input
                                validation={
                                    {
                                        required: { value: true, message: 'This is required' },
                                        pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Please enter a valid email' }
                                    }
                                }
                                register={register}
                                errors={errors}
                                name="user_email"
                            />
                        </div>
                        <Textarea 
                            validation={
                                {
                                    required: false,
                                }
                            }
                            register={register}
                            name="message"
                        />
                        <Button
                            type="submit"
                            size="md"
                            label='Submit Information'
                        >
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    )
}

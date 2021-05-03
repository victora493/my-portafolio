import React from 'react'
import styles from './Form.module.css'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import Input from '../../../Components/UI/Input'
import Button from '../../../Components/UI/Button'
import Textarea from '../../../Components/UI/Textarea'
// for animations
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp1 } from '../../../animations/framerMotionAnimation'

export default function Form({toast}) {
    const [ ref, inView] = useInView({ rootMargin: '60px'})
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()

        sendEmail(data)
    };

    // need to conect this two somehow
    async function sendEmail(templateParams) {
        const promise = emailjs.send('service_zjgajro', 'template_hfop2mj', templateParams, 'user_tthIIXrCt6pokeLnLSWQB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        toast.promise(promise, {
            loading: 'Loading',
            success: 'thank you! Your information was submitted correctly',
            error: "I'm sorry:( there was an error, please try again later",
        });
    }

    return (
        <>
            <motion.div 
                className={styles.contactForm}
                ref={ref}
                variants={fadeUp1}
                initial='hidden'
                animate={inView && 'visible'}
            >
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
            </motion.div>
        </>
    )
}

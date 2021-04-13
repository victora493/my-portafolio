import React from 'react'
import { register } from 'react-scroll/modules/mixins/scroller'
import styles from './Input.module.css'

export default function Textarea({name, id, validation, register}) {
    return (
        <div className={styles.mainWrapper}>
            <label htmlFor={name}>{validation?.required && '*'}{name}</label>
            <textarea
                id={id}
                {...register(name)} name={name} cols="10" rows="5" 
                placeholder="Please Enter your Message here">
            </textarea>
        </div>
    )
}

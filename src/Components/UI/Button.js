import React from 'react'
import styles from './Button.module.css'

export default function Button({label, type, color, loading, onClick, size}) {
    return (
        <>
            <button
                disabled={loading}
                type={type || 'button' } 
                data-size={size || 'sm'} 
                onClick={onClick} 
                data-color={color || 'primary'} 
                
                className={styles.myBtn} 
            >
                {loading ? "Loading.." : label || 'button'}
            </button>
        </>
    )
}

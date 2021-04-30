import React from 'react'
import styles from './Input.module.css'

export default function Input({name, id, validation, register, errors}) {

    // const [errorsLenght, setErrorsLenght] = useState(0)
    
    // FOR SOME REASON THIS IS NOT WORKING CORRECTLY(THIS WAS TO ADD CLASSES DINAMICALLY IF THERE IS AN ERROR)
    
    // useEffect(() => {
    //     console.log(errors);
    //     setErrorsLenght(Object.keys(errors).length)
    
    // }, [errors])

    return (
        <div className={styles.mainWrapper}>
            <label htmlFor={name}>{validation?.required && '*'}{name.split('_')[1]}</label>
            <input
                id={id}
                {...register(name, {required: {...validation?.required}, pattern: {...validation?.pattern}})} name={name}
                type="text" 
            />
            <p className={styles.errorMessage}>{errors && errors[name]?.message}</p>
        </div>
    )
}

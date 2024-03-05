import { useState } from "react";
import styles from './weatherForm.module.css'

export default function WeatherForm({onChangeCity}){
    const [city, setCity] = useState('');
    
    function onChange (e){
        const value = e.target.value;
        
        if(value != ''){
            setCity(value);
        }
    }

    function handleSubmit(e){
        e.preventDefault();

        onChangeCity(city);
    }

    return <form onSubmit={handleSubmit} className={styles.container}>
        <div className={styles.country}>
            <h1 className={styles.title}>Enter a Country!</h1>
        </div>
        <input type="text" onChange={onChange} className={styles.input} placeholder=" example: London" ></input>
    </form>
}
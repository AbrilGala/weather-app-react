import { useEffect, useState } from "react"
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import styles from './weatherApp.module.css'
import Loading from "./loading";

export default function WeatherApp(){
    const [weather, setWeather] = useState(null);
     

    //Lo que debe susceder por defecto (cuando abro mi app por primera vez)
    //El arreglo representa la cantidad de veces que se ejecuta el useEffect (en este caso solo al inicio)
    useEffect(()=> {
        loadInfo();
    }, []);


    useEffect(()=> {
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])
    async function loadInfo(city = 'london'){
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const json = await request .json();
            setTimeout(()=> {
                setWeather(json);
            }, 2000);
        }catch(error){

        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return (
        <>
        <div className= {styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity}/>
            {weather ?  <WeatherMainInfo weather={weather} /> : <Loading />}
           
        </div>
        </>
    )
}
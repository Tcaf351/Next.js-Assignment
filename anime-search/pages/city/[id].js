import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import WeatherSVG from '../../components/WeatherSVG';
import Header from '../../components/Header';

function City() {
    const router = useRouter();
    const { id } = router.query;

    const [cityData, setCityData] = useState('');
    const [weatherIcon, setWeatherIcon] = useState('');
    const [temperature, setTemperature] = useState('');

    
    const fetchData = async () => {
        
        // const api = process.env.API_KEY3;
        const api = 'c0c1f25e4565ff104b77d4feba3777a6';
        
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${id},Au&units=metric&APPID=${api}`;
        
        const response = await fetch(url);
        const data = await response.json();

        setCityData(data)
        setWeatherIcon(data?.weather[0].icon)
        setTemperature(data?.main.temp)
    }


    useEffect(() => {
        fetchData()
    }, []);

    console.log(temperature);

    
    return ( 
        <div className='h-screen'>
            <Header title={id} />

            <h1 className='capitalize font-semibold text-2xl'>{id}</h1>
            <h1>Current temperature { Math.round(temperature) } C</h1>
            {/* <h1>{ cityData?.weather[0].description }</h1> */}

        {/* <WeatherSVG 
            weatherIcon={weatherIcon} 
            cityData={cityData}
            height={100}
            width={100}
            /> */}
            

        </div>
     );
}

export default City;
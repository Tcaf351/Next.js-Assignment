import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import WeatherSVG from '../../components/WeatherSVG';
import Header from '../../components/Header';

function City() {
    const router = useRouter();
    const { id } = router.query;

    const [cityData, setCityData] = useState();
    const [weatherIcon, setWeatherIcon] = useState();

    
    const fetchData = async () => {
        
        // const api = process.env.API_KEY3;
        const api = 'd515c35362237a42c19d6d5d1aadbf97';
        
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${id},Au&units=metric&APPID=${api}`;
        
        const response = await fetch(url);
        const data = await response.json();

        setCityData(data)
        setWeatherIcon(data?.weather[0].icon)
    }


    useEffect(() => {
        fetchData()
    });

    console.log(cityData);

    
    return ( 
        <div className='h-screen'>
            <Header title={id} />

            <h1 className='capitalize font-semibold text-2xl'>{id}</h1>
            <h1>Current temperature { Math.round(cityData?.main.temp) } C</h1>
            <h1>{ cityData?.weather[0].description }</h1>

        <WeatherSVG 
            weatherIcon={weatherIcon} 
            cityData={cityData}
            />
            

        </div>
     );
}

export default City;
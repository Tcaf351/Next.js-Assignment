import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function City() {
    const router = useRouter();
    const { id } = router.query;

    const [cityData, setCityData] = useState();

    
    const fetchData = async () => {
        
        // const api = process.env.API_KEY;
        const api = 'fe987a03fceb54af8bc3704a4ce21144';
        
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${id},Au&units=metric&APPID=${api}`;
        
        const response = await fetch(url);
        const data = await response.json();
        setCityData(data)
    }


    useEffect(() => {
        fetchData()
    }, []);

    console.log(cityData);


    
    return ( 
        <div className='h-screen'>
            <h1 className='capitalize font-semibold text-2xl'>{id}</h1>
            <h1>Current temperature { Math.round(cityData?.main.temp) }C</h1>
            <h1>{ cityData?.weather[0].description }</h1>
        </div>
     );
}

export default City;
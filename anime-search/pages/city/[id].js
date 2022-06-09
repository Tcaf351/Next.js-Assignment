import WeatherSVG from '../../components/WeatherSVG';
import Header from '../../components/Header';

function City({ data }) {

    console.log(data);
    
    return ( 
        <div className='h-screen'>
            <Header title={data.name} />
            <h1>Current temperature { Math.round(data.main.temp) } C</h1>
            <h1>{ data.weather[0].description }</h1>

        <WeatherSVG 
            weatherIcon={data.weather[0].icon} 
            cityData={data.weather[0].description}
            height={100}
            width={100}
            />

        </div>
     );
}


export const getServerSideProps = async (context) => {
        // const api = process.env.API_KEY3;
        // const api = '8ca87131555f214021777eb3cbe3a678';

        const id = context.params.id;
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${id},au&APPID=${process.env.API}`);
    const data = await response.json();    
    
    console.log(data);
    
    return {
        props: {
            data,
        }
    };
};

export default City;
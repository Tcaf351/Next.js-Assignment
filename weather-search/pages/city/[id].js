import WeatherSVG from '../../components/WeatherSVG';
import Header from '../../components/Header';

function City({ data }) {
    
    return ( 
        <div className='xs:flex xs:flex-col xs:items-center xs:justify-center xs:h-screen xs:max-w-full'>
            <Header title={data.name} />

            <div className='xs:flex xs:flex-col md:flex-row xs:items-center xs:justify-center'>
                {/* left screen start */}
            <div className='xs:flex xs:flex-col md:flex-row xs:items-center xs:justify-start xs:max-w-screen-lg px-28'>
                <h1 className='text-3xl font-semibold'>{data.name}</h1>
                <WeatherSVG 
                    weatherIcon={data.weather[0].icon} 
                    cityData={data.weather[0].description}
                    height={200}
                    width={200}
                    />
            </div>
            {/* left screen end */}


            {/* right screen start */}
            <div className='xs:flex xs:flex-row md:flex-col xs:items-center xs:justify-center lg:justify-end max-w-screen-lg xs:px-3 lg:mx-0 lg:px-28'>
                <h1 className='text-lg font-medium capitalize mx-6'>Minumum Temperature: { Math.round(data.main.temp_min) }&#8451;</h1>
                <h1 className='text-lg font-medium capitalize mx-6'>Maximum Temperature: { Math.round(data.main.temp_max) }&#8451;</h1>
            </div>
            {/* right screen end */}
            </div>


            {/* bottom screen start */}
            <div className='py-10 xs:flex xs:items-center xs:justify-center xs:flex-col'>
                <h1 className='text-lg font-medium capitalize'>Current temperature: { Math.round(data.main.temp) }&#8451;</h1>
                <h1 className='text-lg font-medium capitalize'>{ data.weather[0].description }</h1>
            </div>
            {/* bottom screen end */}

        </div>
     );
}


export const getServerSideProps = async (context) => {

    const id = context.params.id;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${id},Au&units=metric&APPID=${process.env.API}`);
    const data = await response.json();    
    
    console.log(data);
    
    return {
        props: {
            data,
        }
    };
};

export default City;
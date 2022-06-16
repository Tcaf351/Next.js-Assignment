import WeatherSVG from '../../components/WeatherSVG';
import Header from '../../components/Header';

function City({ data }) {
    
    return ( 
        <div className='flex flex-col items-center justify-center h-screen max-w-full'>
            <Header title={data.name} />
            <h1></h1>

            <div className='flex items-center justify-center'>
                {/* left screen start */}
            <div className='flex flex-row items-center justify-start max-w-screen-lg px-28'>
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
            <div className='flex flex-col items-center justify-end max-w-screen-lg px-28'>
                <h1 className='text-lg font-medium'>Minumum Temperature: { Math.round(data.main.temp_min) }&#8451;</h1>
                <h1 className='text-lg font-medium'>Maximum Temperature: { Math.round(data.main.temp_max) }&#8451;</h1>
            </div>
            {/* right screen end */}
            </div>


            {/* bottom screen start */}
            <div className='py-10'>
                <h1 className='text-lg font-medium capitalize'>Current temperature: { Math.round(data.main.temp) }&#8451;</h1>
                <h1 className='text-lg font-medium capitalize'>{ data.weather[0].description }</h1>
            </div>
            {/* bottom screen end */}

        </div>
     );
}


// export const getServerSideProps = async (context) => {

//     const id = context.params.id;

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${id},Au&units=metric&APPID=${process.env.API}`);
//     const data = await response.json();    
    
//     console.log(data);
    
//     return {
//         props: {
//             data,
//         }
//     };
// };

export default City;
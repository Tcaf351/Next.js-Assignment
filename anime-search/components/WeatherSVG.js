import Image from 'next/image';


function WeatherSVG({ weatherIcon, cityData }) {
    switch (weatherIcon) {
        case "01d":
            return <Image 
                    src="/Images/day.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
            break;

        case "01n":
            return <Image 
                    src="/Images/night.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
            break;

        case "02d":
            return <Image 
                    src="/Images/cloudy-day-1.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
            break;

        case "02n" :
            return <Image 
                    src="/Images/cloudy-night-1.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
            break;
        
        case "03d" || "03n" || "04d" || "04n":
            return <Image 
                    src="/Images/cloudy.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    /> 
            break;
        
        case "09d" || "09n" || "10d" || "10n":
            return <Image 
                    src="/Images/rainy-6.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
            break;
        
        case "11d" || "11n":
            return <Image 
                    src="/Images/thunder.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
        break;

        case "13d" || "13n":
            return <Image 
                    src="/Images/snowy-6.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
            break;
        
        case "50d" || "50n":
            return <Image 
                    src="/Images/mist.png" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
            break;
    
        default: return <Image 
                        src="/Images/cloudy-day-1.svg" 
                        alt={ cityData?.weather[0].description } 
                        height={250}
                        width={250}
                        />
    }
}

export default WeatherSVG;
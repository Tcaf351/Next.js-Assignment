import Image from 'next/image';


function WeatherSVG({ weatherIcon, cityData }) {
    switch (weatherIcon) {
        case "01d":
            return (
                <div>
                    <Image 
                    src="/Images/day.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
                </div>
            )

        case "01n":
            return <Image 
                    src="/Images/night.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />

        case "02d":
            return <Image 
                    src="/Images/cloudy-day-1.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />

        case "02n" :
            return <Image 
                    src="/Images/cloudy-night-1.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
        
        case "03d" || "03n" || "04d" || "04n":
            return <Image 
                    src="/Images/cloudy.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    /> 
        
        case "09d" || "09n" || "10d" || "10n":
            return <Image 
                    src="/Images/rainy-6.svg" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
        
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
        
        case "50d" || "50n":
            return <Image 
                    src="/Images/mist.png" 
                    alt={ cityData?.weather[0].description } 
                    height={250}
                    width={250}
                    />
    
        default: return <Image 
                        src="/Images/cloudy-day-1.svg" 
                        alt={ cityData?.weather[0].description } 
                        height={250}
                        width={250}
                        />
    }
}

export default WeatherSVG;
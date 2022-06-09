// import type { NextPage } from 'next'
import Header from "../components/Header";
import WeatherSVG from '../components/WeatherSVG';

// const Home: NextPage = () => {
  const Home = (props) => {
    console.log(props);
    console.log(props);

  return (
    
    <div className="min-h-screen bg-gray-100">
      <Header 
        title="Home" 
        description="This is the home page"
        content="This is the home page. You can search for different weather in different cities in Australia"
      />

      <div className="flex items-center justify-around">
          {/* text on left of screen start */}
          <div className="flex flex-col items-start justify-center h-screen lg:max-w-screen-xl">
            <div className="flex flex-row items-center justify-center">
              <h1 className="text-5xl font-medium">Welcome to</h1> <span className="text-5xl font-medium px-3 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Weather Search</span>
            </div>
            <div>
              <h1 className="text-xl py-1">Your source for searching your citys current weather!</h1>
            </div>
          </div>
          {/* text on left of screen end */}
          

          {/* image on right of screen start */}
          <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <h1 className="mr-3 text-2xl font-semibold">{ props.data.name }</h1>
                <WeatherSVG 
                  height={200}
                  width={200}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="py-1 text-lg font-semibold">Current temperature: { Math.round(props.data?.main.temp) }&#8451;</h1>
                <h1 className="py-1 text-lg font-semibold">{ props.data?.weather[0].description }</h1>
              </div>
          </div>
          {/* image on right of screen end */}
      </div>

    </div>
  )
  

  
}

export const getStaticProps = async () => {
  const api = process.env.API_KEY3;
  let city = 'Melbourne';
  let countryCode = 'Au';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&APPID=${api}`;

  const response = await fetch(url);
  const data = await response.json();

  
  return {
    props: {
      data,
    },
  };
};

export default Home
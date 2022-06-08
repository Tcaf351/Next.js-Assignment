// import type { NextPage } from 'next'
import Header from "../components/Header";

// const Home: NextPage = () => {
  const Home = (props) => {
    console.log(props);
    console.log(props);

  return (
    
    <div className="min-h-screen bg-gray-100 px-20 flex">
      <Header title="Home" />

        {/* text on left of screen start */}
        <div className="flex flex-col items-start justify-center h-screen">
          <div className="flex flex-row items-center justify-center">
            <h1 className="text-5xl font-medium">Welcome to</h1> <span className="text-5xl font-medium px-3 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Weather Search</span>
          </div>
          <div>
            <h1 className="text-xl py-1">Your source for searching your citys current weather!</h1>
          </div>
        </div>
        {/* text on left of screen end */}
        

        {/* image on right of screen start */}
        <div className="flex flex-col items-center justify-center w-1/2">
            <h1>{ props.data.name }</h1>
            <h1>Current temperature: { Math.round(props.data?.main.temp) } C</h1>
            <h1>{ props.data?.weather[0].description }</h1>
        </div>
        {/* image on right of screen end */}

    </div>
  )
  

  
}

export const getStaticProps = async (context) => {
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
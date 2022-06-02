// import axios from 'axios';

import Form from "../components/Form";


function Search(props) {
    console.log(`props: ${props}`);

    return ( 
        <div className="min-h-screen bg-gradient-to-bl from-orange-200 via-cyan-300 to-sky-300">

            <div className='flex flex-col items-center justify-center h-1/2 pt-6'>
                <Form />
            </div>
        </div>
     );
}

export const getServerSideProps = async (context) => {
    console.log(context)

    const api = process.env.API_KEY;
    let city;
    let countryCode;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&APPID=${api}`;

    const response = await fetch(url);
    const data = await response.json();


  return {
    props: {
        data,
    },
  };
};

export default Search;
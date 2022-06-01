// import axios from 'axios';
import Header from '../components/Header';

function Shows(props) {
    

    return ( 
        <div className="min-h-screen bg-gray-100">
            <Header title="Search" />
            <h1>Hello World</h1>
            <div className='flex flex-col items-center justify-center h-1/2'>
                <form className='flex flex-col justify-center'>
                    <label>City</label>
                    <input type="text" className='rounded-md' />
                    <label>Country Code</label>
                    <input type="text" className='rounded-md' />
                    <div className='flex justify-center my-2'>
                        <button type="submit" className='bg-gray-300 rounded-md w-1/2'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
     );
}


// export const getStaticPaths = async (context) => {
//   return {
//     props: {},
//   };
// };

// export const getServerSideProps = async (context) => {
    const api = process.env.API_KEY;
    let city;
    let countryCode;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&APPID=${api}`;

    // const fetchApi = await axios.get(`${url}people`);
    // const results = fetchApi.data;


//   return {
//     props: {
//         results
//     },
//   };
// };

export default Shows;
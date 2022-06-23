import Header from '../components/Header';

function About() {
    return ( 
        <div className="min-h-screen bg-gray-100">
            <Header 
                title="About" 
                description="This is the about page"
                content="This is an informative page for you to learn about how this website works"
            />

            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-lg">Weather Search allows you to search for weather in all cities in Australia! <br />
                There are is plenty of cities to choose from, so you can always see the difference in weather across all of Australia.</h1>
                <p className="py-10">Whether you are after information from your home city or weather from the other side of the country. We have got you covered!</p>
            </div>
        </div>
     );
}

export default About;
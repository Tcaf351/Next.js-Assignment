import Header from '../components/Header';

function About() {
    return ( 
        <div className="min-h-screen bg-gray-100">
            <Header title="About" />

            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-lg">Star Wars Wiki helps you to discover new facts about your favourite Star Wars characters. <br />
            We have a plenty of characters to choose from, so that there is always a new fact to learn!</h1>
                <p className="py-10">Whether you are after information from the original trilogy or something from the prequals. We have got you covered!</p>
            </div>
        </div>
     );
}

export default About;
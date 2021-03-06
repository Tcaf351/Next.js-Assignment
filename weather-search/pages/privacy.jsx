import Header from "../components/Header";


function Privacy() {
    return ( 
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Header 
                title="Privacy" 
                description="This is the privacy page"
                content="This is the privacy page. You can see our privacy terms and conditions"
            />

            <div className="p-10">
                <h1 className="text-3xl pb-8">Privacy Policy</h1>
                <p>Sharing your information as required or permitted by law</p>
                <p>From time to time we may also share your information:</p>
                <li className="pt-5">as required or permitted by any law. For example, in response to a subpoena or to the tax office following a direction issued under taxation laws; or</li>
                <li className="pb-5">in accordance with your consent (which may be express or inferred from the circumstances).</li>

                <p>We take steps to ensure your info remains confidential</p>
                <p>We will take all reasonable steps to ensure that these entities and organisations are <br /> bound by confidentiality and privacy obligations with respect to the protection of your personal information.</p>
            </div>
            <p>Privacy policy cited from spaceship.com.au</p>
        </div>
     );
}

export default Privacy;
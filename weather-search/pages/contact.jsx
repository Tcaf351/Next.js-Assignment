import Header from "../components/Header";


function Contact() {
    return ( 
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <Header 
                title="Contact"
                description="This is the contact page"
                content="This is a contact page for you to discover how you can contact us"
            />

                <h1 className="text-xl">Hi there 👋</h1>
                <p>Do you have any questions, interesting feedback or found a bug? Let us know and we will do our best to help!</p>
                <p>Contact us on 1300 123 456</p>
                <p>or email us at next.js@assignment.com</p>
        </div>
     );
}

export default Contact;
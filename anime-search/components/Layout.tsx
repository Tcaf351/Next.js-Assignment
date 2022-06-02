// Components
import Header from '../components/Header';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }: any): any => {
    return (
        <div> 
            <Header title={ children.type.name } /> {/* dynamically changes title based on page user is on */}
            <Navbar />
                <main>{ children }</main>
            <Footer /> 
        </div>
    )
}
export default Layout
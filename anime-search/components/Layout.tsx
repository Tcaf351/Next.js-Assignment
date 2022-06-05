// Components
import Header from '../components/Header';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }: any): any => {
    return (
        <div>
            <Navbar />
                <main>{ children }</main>
            <Footer /> 
        </div>
    )
}
export default Layout
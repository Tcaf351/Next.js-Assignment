// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }: any): any => {
    return (
        <>
            <Navbar />
            <main>{ children }</main>
            <Footer /> 
        </>
    )
}
export default Layout
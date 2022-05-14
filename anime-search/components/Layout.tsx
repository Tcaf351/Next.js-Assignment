// import { NextPage } from 'next'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

// const Home: NextPage = () => {
// export const Layout: NextPage = ({ children }) {
// export default function Layout: NextPage ({ children }) {
const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <main>{ children }</main>
            <Footer /> 
        </>
    )
}
export default Layout
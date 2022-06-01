import Head from 'next/head';

function Header({ title }) {
    return ( 
        <Head>
            <title>Weather Search | { title }</title>
        </Head>
     );
}

export default Header;
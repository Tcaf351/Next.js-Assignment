import Head from 'next/head';

function Header({ title, description, content }) {
    return ( 
        <Head>
            <title>Weather Search | { title }</title>
            <meta name={description} content={content} />
        </Head>
     );
}

export default Header;
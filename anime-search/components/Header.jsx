import Head from 'next/head';

function Header({ title }) {
    return ( 
        <Head>
            <title>Anime-Search | { title }</title>
        </Head>
     );
}

export default Header;
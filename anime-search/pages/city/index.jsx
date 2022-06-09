import Link from 'next/link';
import Header from '../../components/Header';

function Search() {

    return ( 
        <div className="min-h-screen bg-gradient-to-bl from-orange-200 via-cyan-300 to-sky-300">
            <Header title="Search" />

            <div className='flex flex-col items-center justify-center h-1/2 pt-6'>
                <Link href="/city/melbourne">
                    <a>Melbourne</a>
                </Link>
                <Link href="/city/sydney">
                    <a>Sydney</a>
                </Link>
                <Link href="/city/brisbane">
                    <a>Brisbane</a>
                </Link>
                <Link href="/city/canberra">
                    <a>Canberra</a>
                </Link>
                <Link href="/city/darwin">
                    <a>Darwin</a>
                </Link>
                <Link href="/city/adelaide">
                    <a>Adelaide</a>
                </Link>
                <Link href="/city/hobart">
                    <a>Hobart</a>
                </Link>
                <Link href="/city/perth">
                    <a>Perth</a>
                </Link>
            </div>
        </div>
     );
}

export default Search;
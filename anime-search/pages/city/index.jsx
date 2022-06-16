import Link from 'next/link';
import Header from '../../components/Header';

function Search() {

    return ( 
        <div className="min-h-screen bg-gradient-to-tr from-gray-200 to-gray-100">
            <Header title="Search" />

            <div className='md:flex md:flex-col md:items-center md:justify-center h-screen w-screen pt-6'>
                <div className='flex flex-row items-center justify-center w-1/2'>
                    <Link href="/city/melbourne">
                        <a className='border-2 border-red-400 hover:border-orange-400 md:px-7 md:py-2 rounded-lg mx-14 my-10'>Melbourne</a>
                    </Link>
                    <Link href="/city/sydney">
                        <a className='border-2 border-red-400 hover:border-orange-400 md:px-7 md:py-2 rounded-lg mx-14 my-10'>Sydney</a>
                    </Link>
                    <Link href="/city/brisbane">
                        <a className='border-2 border-red-400 hover:border-orange-400 md:px-7 md:py-2 rounded-lg mx-14 my-10'>Brisbane</a>
                    </Link>
                </div>
                
                <div className='flex flex-row items-center justify-center'>
                    <Link href="/city/canberra">
                        <a className='border-2 border-red-400 hover:border-orange-400 md:px-7 md:py-2 rounded-lg mx-14 my-10'>Canberra</a>
                    </Link>
                    <Link href="/city/darwin">
                        <a className='border-2 border-red-400 hover:border-orange-400 md:px-7 md:py-2 rounded-lg mx-14 my-10'>Darwin</a>
                    </Link>
                    <Link href="/city/adelaide">
                        <a className='border-2 border-red-400 hover:border-orange-400 md:px-7 md:py-2 rounded-lg mx-14 my-10'>Adelaide</a>
                    </Link>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <Link href="/city/hobart">
                        <a className='border-2 border-red-400 hover:border-orange-400 md:px-7 md:py-2 rounded-lg mx-14 my-10'>Hobart</a>
                    </Link>
                    <Link href="/city/perth">
                        <a className='border-2 border-red-400 hover:border-orange-400 md:px-7 md:py-2 rounded-lg mx-14 my-10'>Perth</a>
                    </Link>
                </div>
            </div>
        </div>
     );
}

export default Search;
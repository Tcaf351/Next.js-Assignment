import Link from 'next/link';
import Header from '../../components/Header';

function Search() {

    return ( 
        <div className="xs:h-screen bg-gradient-to-tr from-gray-200 to-gray-100">
            <Header title="Search" />

            <div className='xs:flex xs:flex-col xs:items-center xs:justify-center xs:h-screen xs:w-screen'>
                <div className='xs:flex xs:flex-col lg:flex-row xs:items-center xs:justify-center w-1/2'>
                    <Link href="/city/melbourne">
                        <a className='border-2 border-red-400 hover:border-orange-400 xs:px-7 md:py-2 rounded-lg mx-14 xs:my-4 md:my-5'>Melbourne</a>
                    </Link>
                    <Link href="/city/sydney">
                        <a className='border-2 border-red-400 hover:border-orange-400 xs:px-7 md:py-2 rounded-lg mx-14 xs:my-4 md:my-5'>Sydney</a>
                    </Link>
                    <Link href="/city/brisbane">
                        <a className='border-2 border-red-400 hover:border-orange-400 xs:px-7 md:py-2 rounded-lg mx-14 xs:my-4 md:my-5'>Brisbane</a>
                    </Link>
                </div>
                
                <div className='xs:flex xs:flex-col lg:flex-row xs:items-center xs:justify-center'>
                    <Link href="/city/canberra">
                        <a className='border-2 border-red-400 hover:border-orange-400 xs:px-7 md:py-2 rounded-lg mx-14 xs:my-4 md:my-5'>Canberra</a>
                    </Link>
                    <Link href="/city/darwin">
                        <a className='border-2 border-red-400 hover:border-orange-400 xs:px-7 md:py-2 rounded-lg mx-14 xs:my-4 md:my-5'>Darwin</a>
                    </Link>
                    <Link href="/city/adelaide">
                        <a className='border-2 border-red-400 hover:border-orange-400 xs:px-7 md:py-2 rounded-lg mx-14 xs:my-4 md:my-5'>Adelaide</a>
                    </Link>
                </div>
                <div className='xs:flex xs:flex-col lg:flex-row xs:items-center xs:justify-center'>
                    <Link href="/city/hobart">
                        <a className='border-2 border-red-400 hover:border-orange-400 xs:px-7 md:py-2 rounded-lg mx-14 xs:my-4 md:my-5'>Hobart</a>
                    </Link>
                    <Link href="/city/perth">
                        <a className='border-2 border-red-400 hover:border-orange-400 xs:px-7 md:py-2 rounded-lg mx-14 xs:my-4 md:my-5'>Perth</a>
                    </Link>
                </div>
            </div>
            
        </div>
     );
}

export default Search;
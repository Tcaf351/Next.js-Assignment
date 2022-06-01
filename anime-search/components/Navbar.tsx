import Link from 'next/link';

function Navbar() {
    return ( 
        <nav className="min-w-full">
            <ul className="flex items-center justify-center">
                <li className="mx-4 mt-2 py-2 px-4 text-lg hover:bg-slate-300 hover:shadow-md rounded-lg">
                    <Link href="/city">
                        <a>Search</a>
                    </Link>
                </li>
                <li className="mx-4 mt-2 py-2 px-4 text-lg hover:bg-slate-300 hover:shadow-md rounded-lg">
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li className="mx-4 mt-2 py-2 px-4 text-lg hover:bg-slate-300 hover:shadow-md rounded-lg">
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li className="mx-4 mt-2 py-2 px-4 text-lg hover:bg-slate-300 hover:shadow-md rounded-lg">
                    <Link href="/privacy">
                        <a>Privacy</a>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}

export default Navbar;
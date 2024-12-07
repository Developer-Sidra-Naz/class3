import Link from "next/link";

const NavBar: React.FC = () => {
    return (
        <div>
            <nav>
                <ul className="flex bg-slate-900 text-white font-semibold p-3 gap-14 justify-center">
                    <li>
                        <Link
                            href="/"
                               className="hover:text-blue-400 transition-colors duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/About"
                                className="hover:text-blue-400 transition-colors duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/Collection"
                                className="hover:text-blue-400 transition-colors duration-300"
                        >
                            Collection
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/Services"
                                className="hover:text-blue-400 transition-colors duration-300"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/Contact"
                                className="hover:text-blue-400 transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;


import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-10 border-b border-gray-200">
            <ul className="flex justify-center items-center space-x-8 py-4">
                <li>
                    <Link to="/" className="px-4 py-2 rounded-t-md border-b-2 border-transparent hover:border-blue-500 text-blue-500 hover:text-blue-700 font-semibold transition-colors">Home</Link>
                </li>
                <li>
                    <Link to="/contact" className="px-4 py-2 rounded-t-md border-b-2 border-transparent hover:border-green-500 text-green-500 hover:text-green-700 font-semibold transition-colors">Contact</Link>
                </li>
                <li>
                    <Link to="/about" className="px-4 py-2 rounded-t-md border-b-2 border-transparent hover:border-purple-500 text-purple-500 hover:text-purple-700 font-semibold transition-colors">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
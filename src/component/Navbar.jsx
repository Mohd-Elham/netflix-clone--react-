// src/component/Navbar.jsx
import { useState } from 'react';
import logo from '../assets/logo.png';
import profile_img from '../assets/profile_img.png'

import { FaSearch, FaBell, FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    // Simulate scroll effect
    if (typeof window !== 'undefined') {
        window.onscroll = () => {
            setIsScrolled(window.pageYOffset > 10);
            return () => (window.onscroll = null);
        };
    }

    const navLinks = [
        "Home",
        "TV Shows",
        "Movies",
        "New & Popular",
        "My List",
        "Browse by Language"
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/70 to-transparent'
                }`}
        >
            <div className="flex items-center justify-between px-4 py-3 md:px-8">
                {/* Left Section */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Notflix Logo"
                        className="h-8 md:h-10 mr-6 cursor-pointer"
                    />

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
                                >
                                    {link }
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <FaSearch className="text-white cursor-pointer hover:text-gray-300 transition-colors" />
                    <FaBell className="text-white cursor-pointer hover:text-gray-300 transition-colors" />

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <div className="w-8 h-8 bg-gray-600 rounded overflow-hidden">
                                {/* Profile placeholder */}
                                {/* <div className="bg-gray-400 border-2 border-dashed rounded-xl w-full h-full" /> */}
                                <img src={profile_img} alt="" />
                            </div>
                            <FaCaretDown src={profile_img} className={`text-white ml-1 transition-transform ${showMenu ? 'rotate-180' : ''}`} />
                        </div>

                        {/* Dropdown Menu */}
                        {showMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded shadow-lg py-1">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-white hover:bg-gray-800"
                                >
                                    Account
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-white hover:bg-gray-800"
                                >
                                    Help Center
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-white hover:bg-gray-800 border-t border-gray-700"
                                >
                                    Sign out
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="hidden overflow-x-auto py-2 px-4 bg-black/80">
                <ul className="flex space-x-4 min-w-max">
                    {navLinks.slice(0, 4).map((link, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="text-white text-sm font-medium hover:text-gray-300 transition-colors whitespace-nowrap"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
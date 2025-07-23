'use client'
import React, { useState } from 'react';
import { ChevronDown, Globe, Menu } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className={poppins.className}>
            <header className="flex w-full items-center bg-transparent absolute top-0 left-0 right-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="relative flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="w-60 max-w-full px-4">
                            <a href="/#" className="block w-full py-5">
                                <img
                                    src="/assets/logot.png"
                                    alt="logo"
                                    className="dark:hidden mx-8"
                                />
                                <img
                                    src="/assets/logot.png"
                                    alt="logo"
                                    className="hidden dark:block mx-8 h-3/4"
                                />
                            </a>
                        </div>

                        {/* Desktop Navbar */}
                        <div className="hidden lg:flex w-full items-center justify-between">
                            <nav id="navbarCollapse" className="lg:static lg:block lg:w-full">
                                <ul className="flex justify-center  space-x-8 list-none">
                                    <a href="/Ride" className="nav-link block text-red-800 font-bold  hover:text-red-300 transition-colors duration-300 relative">
                                        Services
                                    </a>
                                    <a href="/ArwahTekhdem" className="nav-link block text-red-800 font-bold  hover:text-red-300 transition-colors duration-300 relative">
                                        Get started
                                    </a>
                                    <div className="relative group">
                                        
                                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-400 transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></div>
                                    </div>
                                </ul>
                            </nav>

                            <div className="hidden sm:flex items-center space-x-4">
                                <Badge text="English" color="bg-red-700" />
                                <a href="/#" className="rounded-2xl w-30 bg-red-600 hover:bg-red-700 px-7 py-1 text-base font-medium text-white transition-colors duration-300">
                                    Sign Up
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden p-2 text-white hover:text-red-300 transition-colors duration-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Mobile Navbar */}
                    {mobileMenuOpen && (
                        <nav className="lg:hidden mt-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-md p-4">
                            <ul className="space-y-4">
                                <MobileDropdown title="Services" items={["Yassir Ride", "Yassir Food", "Yassir Grocery", "Order for someone else"]} />
                                <MobileDropdown title="Partners" />
                                <MobileDropdown title="About us" items={["Business", "Careers"]} />
                                <li>
                                    
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Header;

const ListItem = ({ children, NavLink }) => (
    <li>
        <a href={NavLink} className="flex py-2 text-base font-medium text-white hover:text-red-300 transition-colors duration-300">
            {children}
        </a>
    </li>
);

const Dropdown = ({ title }) => (
    <li className="relative group list-none">
        <a href="#" className="flex items-center py-2 text-base font-light text-white hover:text-red-300 transition-colors duration-300">
            {title}
            <ChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180" size={16} />
        </a>
        <ul className="absolute left-0 mt-2 w-48 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <DropdownItem href="/#">Submenu 1</DropdownItem>
            <DropdownItem href="/#">Submenu 2</DropdownItem>
        </ul>
    </li>
);

const DropdownItem = ({ href, children }) => (
    <li>
        <a href={href} className="block px-4 py-2 text-md text-white font-light hover:bg-red-500/20 transition-colors duration-300">
            {children}
        </a>
    </li>
);

const MobileDropdown = ({ title, items = [] }) => {
    const [open, setOpen] = useState(false);
    return (
        <li>
            <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full text-base font-medium text-white hover:text-red-300 transition-colors duration-300">
                {title} <ChevronDown className={`ml-2 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} size={16} />
            </button>
            {open && items.length > 0 && (
                <ul className="mt-2 pl-4 space-y-2">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a href="/#" className="block text-sm font-medium text-white/80 hover:text-red-300 transition-colors duration-300">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const Badge = ({ text, color = "bg-blue-500" }) => (
    <span className={`flex flow-row items-center px-3 py-1 text-sm font-semibold text-white rounded-full ${color}`}>
        <Globe className='w-4 mr-2' />
        {text}
    </span>
);
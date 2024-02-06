import React, { useState } from "react";

interface HeaderProps {
    logo: string;
    cart: string;
    userAvatar: string;
}

interface INavProps {
    text: string;
}

function NavBtns(props: INavProps) {
    return (
        <a href="#" className="text-gray-800 hover:text-gray-900">
            {props.text}
        </a>
    );
}

const Header: React.FC<HeaderProps> = ({ logo, cart, userAvatar }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-white w-10/12 p-3 fixed shadow-md">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        {/* Mobile menu toggle button */}
                        <button
                            className="text-gray-800 hover:text-gray-900 sm:hidden"
                            onClick={handleMobileMenuToggle}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start gap-3">
                        <div className="flex-shrink-0">
                            <img src={logo} alt="Sneakers" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <nav className="space-x-4 flex">
                                <NavBtns text="Collections" />
                                <NavBtns text="Men" />
                                <NavBtns text="Womem" />
                                <NavBtns text="About" />
                                <NavBtns text="Contact" />
                            </nav>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex gap-5 items-center">
                            <img
                                src={cart}
                                className="cursor-pointer"
                                height={30}
                                width={30}
                            />
                            <img
                                src={userAvatar}
                                alt=""
                                className="cursor-pointer hover:border-2 hover:border-[#ff7d1a] rounded-full"
                                height={50}
                                width={50}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu component */}
            <div
                className={`${
                    isMobileMenuOpen ? "block" : "hidden"
                } sm:hidden absolute left-0 w-full h-auto bg-gray-200`}
            >
                <nav className="p-5">
                    <NavBtns text="Collections" />
                    <NavBtns text="Men" />
                    <NavBtns text="Womem" />
                    <NavBtns text="About" />
                    <NavBtns text="Contact" />
                </nav>
            </div>
        </div>
    );
};

export default Header;

import React, { useState, ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import CartModal from "@/components/CartModal";

interface HeaderProps {
    logo: string;
    userAvatar: string;
}

const NavBtns = ({
    children,
    className,
    ...props
}: ComponentPropsWithRef<"a">) => {
    return (
        <a
            href="#"
            className={twMerge(
                "text-gray-700 hover:text-gray-900 hover:underline hover:underline-offset-[34px] hover:decoration-[#ff7d1a] hover:decoration-4",
                className
            )}
            {...props}
        >
            {children}
        </a>
    );
};

const Header: React.FC<HeaderProps> = ({ logo, userAvatar }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-white w-10/12 p-3 fixed shadow-md">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center">
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
                            <img
                                src={logo}
                                alt="Sneakers"
                                className="w-[120px] md:w-auto"
                            />
                        </div>
                        <div className="hidden md:block sm:ml-6">
                            <nav className="space-x-4 flex">
                                <NavBtns>Collections</NavBtns>
                                <NavBtns>Men</NavBtns>
                                <NavBtns>Womem</NavBtns>
                                <NavBtns>About</NavBtns>
                                <NavBtns>Contact</NavBtns>
                            </nav>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <CartModal />
                        <img
                            src={userAvatar}
                            alt=""
                            className="cursor-pointer hover:border-2 hover:border-[#ff7d1a] rounded-full"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`${
                    isMobileMenuOpen ? "block" : "hidden"
                } sm:hidden absolute left-0 w-full h-auto bg-gray-100`}
            >
                <nav className=" flex flex-col gap-3">
                    <NavBtns className="hover:no-underline hover:bg-gray-200 w-full p-2">
                        Collections
                    </NavBtns>
                    <NavBtns className="hover:no-underline hover:bg-gray-200 w-full p-2">
                        Men
                    </NavBtns>
                    <NavBtns className="hover:no-underline hover:bg-gray-200 w-full p-2">
                        Womem
                    </NavBtns>
                    <NavBtns className="hover:no-underline hover:bg-gray-200 w-full p-2">
                        About
                    </NavBtns>
                    <NavBtns className="hover:no-underline hover:bg-gray-200 w-full p-2">
                        Contact
                    </NavBtns>
                </nav>
            </div>
        </div>
    );
};

export default Header;

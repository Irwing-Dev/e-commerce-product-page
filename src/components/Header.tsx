import React from "react";

interface HeaderProps {
    logo: string;
    cart: string;
    userAvatar: string;
}

const Header: React.FC<HeaderProps> = ({ logo, cart, userAvatar }) => {
    return (
        <div className="bg-white w-10/12 p-3 fixed shadow-md">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start gap-3">
                        <div className="flex-shrink-0">
                            <img src={logo} alt="" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-800 hover:text-gray-900"
                                >
                                    Collections
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-800 hover:text-gray-900"
                                >
                                    Men
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-800 hover:text-gray-900"
                                >
                                    Womam
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-800 hover:text-gray-900"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-800 hover:text-gray-900"
                                >
                                    Contact
                                </a>
                            </div>
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
        </div>
    );
};

export default Header;

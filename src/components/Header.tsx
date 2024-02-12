import React, { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import CartModal from "@/components/CartModal";
import Menu from "./MobileMenu";

interface HeaderProps {
    logo: string;
    userAvatar: string;
}

export const NavBtns = ({
    children,
    className,
    ...props
}: ComponentPropsWithRef<"a">) => {
    return (
        <a
            href="#"
            className={twMerge(
                "text-text-[#1d2025] hover:text-gray-900 hover:underline hover:underline-offset-[34px] hover:decoration-[#ff7d1a] hover:decoration-4",
                className
            )}
            {...props}
        >
            {children}
        </a>
    );
};

const Header: React.FC<HeaderProps> = ({ logo, userAvatar }) => {
    return (
        <div className="bg-white w-10/12 p-3 fixed shadow-md">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <Menu />
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
        </div>
    );
};

export default Header;

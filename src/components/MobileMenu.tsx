import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";

import { NavBtns } from "./Header";

import iconMenu from "@/assets/images/icon-menu.svg";

export default function Menu() {
    return (
        <Sheet>
            <SheetTrigger>
                <Button className="sm:hidden" variant={"ghost"}>
                    <img src={iconMenu} alt="Menu" />
                </Button>
            </SheetTrigger>
            <SheetContent className="block sm:hidden absolute left-0 w-64 bg-gray-100">
                <nav className=" flex flex-col gap-3 mt-5">
                    <NavBtns className="hover:no-underline hover:bg-gray-200 w-full p-2 rounded-md font-bold">
                        Collections
                    </NavBtns>
                    <NavBtns className="hover:no-underline hover:bg-gray-200 w-full p-2 rounded-md font-bold">
                        Men
                    </NavBtns>
                    <NavBtns className="hover:no-underline hover:bg-gray-200 w-full p-2 rounded-md font-bold">
                        Womem
                    </NavBtns>
                    <NavBtns className="hover:no-underline hover:bg-gray-200 w-full p-2 rounded-md font-bold">
                        About
                    </NavBtns>
                    <NavBtns className="hover:no-underline hover:bg-gray-200 w-full p-2 rounded-md font-bold">
                        Contact
                    </NavBtns>
                </nav>
            </SheetContent>
        </Sheet>
    );
}

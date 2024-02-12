import { useContext } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

import ProductImgThumb1 from "@/assets/images/image-product-1-thumbnail.jpg";

import { CartContext } from "@/context/CartContext";

import cart from "@/assets/images/icon-cart.svg";
import iconDelete from "@/assets/images/icon-delete.svg";

export default function CartModal() {
    const { count, setCount } = useContext(CartContext);
    const { finalValue, setFinalValue } = useContext(CartContext);

    const deleteValues = () => {
        setFinalValue(0);
        setCount(0);
    };

    return (
        <Dialog>
            <DialogTrigger>
                <div>
                    <img src={cart} className="cursor-pointer" />
                    <span
                        className={`relative bottom-6 left-3 bg-[#ff7d1a] w-5 h-3 rounded-lg items-center justify-center text-xs text-white cursor-pointer ${
                            finalValue == 0 ? "hidden" : "flex"
                        }`}
                    >
                        {count}
                    </span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <Card className="w-11/12 sm:w-[370px] sm:right-24 fixed top-16 right-4 shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-lg">Cart</CardTitle>
                    </CardHeader>
                    <hr />
                    <CardContent className="h-44 flex items-center justify-center">
                        {finalValue == 0 ? (
                            <p className="text-[#68707d] font-bold">
                                Your Cart is empty
                            </p>
                        ) : (
                            <div className="grid gap-5">
                                <div className="flex items-center">
                                    <div className="flex gap-3">
                                        <img
                                            src={ProductImgThumb1}
                                            alt="ProductImg"
                                            className="rounded-md"
                                            height={60}
                                            width={60}
                                        />
                                        <div className="block">
                                            <p className="text-[#68707d] w-full">
                                                Fall Limited Edition Sneaker
                                            </p>
                                            <p className="text-[#68707d]">
                                                $125.00 x {count}{" "}
                                                <strong className="text-[#1d2025]">
                                                    ${finalValue}
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                    <DialogClose>
                                        <Button variant={"ghost"}>
                                            <img
                                                src={iconDelete}
                                                alt="delete"
                                                height={16}
                                                width={16}
                                                onClick={deleteValues}
                                            />
                                        </Button>
                                    </DialogClose>
                                </div>
                                <DialogClose>
                                    <Button
                                        className="bg-[#ff7d1a] hover:bg-[#ff7d1a98] w-11/12"
                                        onClick={deleteValues}
                                    >
                                        Checkout
                                    </Button>
                                </DialogClose>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    );
}

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
    Carousel,
    CarouselItem,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import ProductImg1 from "@/assets/images/image-product-1.jpg";
import ProductImg2 from "@/assets/images/image-product-2.jpg";
import ProductImg3 from "@/assets/images/image-product-3.jpg";
import ProductImg4 from "@/assets/images/image-product-4.jpg";

interface ImageSliderProps {
    images: string[];
    thumbnails: string[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
    images,
    thumbnails,
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex justify-center items-center">
                <Dialog>
                    <DialogTrigger>
                        {images.map((image, index) => (
                            <Button className="bg-transparent w-aut h-auto hover:bg-transparent px-0">
                                <img
                                    key={image}
                                    src={image}
                                    alt="ProductImg"
                                    height={340}
                                    className={`rounded-md ${
                                        selectedIndex === index ? "" : "hidden"
                                    } sm:w-[400px]`}
                                    data-testid={`product-img-${index + 1}`}
                                />
                            </Button>
                        ))}
                    </DialogTrigger>
                    <DialogContent className="bg-transparent border-none p-12">
                        <Carousel opts={{ loop: true }}>
                            <CarouselContent>
                                <CarouselItem className="flex items-center justify-center">
                                    <Card className="bg-transparent p-0 border-none">
                                        <CardContent>
                                            <img
                                                src={ProductImg1}
                                                alt="ProductImage"
                                                className="rounded-md"
                                                height={320}
                                                width={320}
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="flex items-center justify-center">
                                    <Card className="bg-transparent p-0 border-none">
                                        <CardContent>
                                            <img
                                                src={ProductImg2}
                                                alt="ProductImage"
                                                className="rounded-md"
                                                height={320}
                                                width={320}
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="flex items-center justify-center">
                                    <Card className="bg-transparent p-0 border-none">
                                        <CardContent>
                                            <img
                                                src={ProductImg3}
                                                alt="ProductImage"
                                                className="rounded-md"
                                                height={320}
                                                width={320}
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="flex items-center justify-center">
                                    <Card className="bg-transparent p-0 border-none">
                                        <CardContent>
                                            <img
                                                src={ProductImg4}
                                                alt="ProductImage"
                                                className="rounded-md"
                                                height={320}
                                                width={320}
                                            />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="flex gap-8">
                {thumbnails.map((thumbnail, index) => (
                    <div key={thumbnail} className="relative">
                        <img
                            src={thumbnail}
                            alt=""
                            height={90}
                            className="rounded-md cursor-pointer sm:w-20"
                            onClick={() => handleImageClick(index)}
                            data-testid={`thumb-${index + 1}`}
                        />
                        <span
                            className={`absolute bg-[#e6e2e2d8] w-full h-full top-0 border-solid rounded-md cursor-pointer border-2 border-[#ff7d1a] ${
                                selectedIndex === index ? "flex" : "hidden"
                            }`}
                            data-testid={`thumb-lightbox-${index + 1}`}
                        ></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

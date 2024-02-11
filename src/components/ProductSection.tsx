import ProductImg1 from "@/assets/images/image-product-1.jpg";
import ProductImg2 from "@/assets/images/image-product-2.jpg";
import ProductImg3 from "@/assets/images/image-product-3.jpg";
import ProductImg4 from "@/assets/images/image-product-4.jpg";

import ProductImgThumb1 from "@/assets/images/image-product-1-thumbnail.jpg";
import ProductImgThumb2 from "@/assets/images/image-product-2-thumbnail.jpg";
import ProductImgThumb3 from "@/assets/images/image-product-3-thumbnail.jpg";
import ProductImgThumb4 from "@/assets/images/image-product-4-thumbnail.jpg";

import CartIcon from "@/assets/images/icon-cart.svg";

import { Button } from "@/components/ui/button";

import { ImageSlider } from "./ImageSlider";

export default function TestSection() {
    return (
        <div className="min-h-screen w-5/6 grid lg:flex items-center justify-evenly mt-24 lg:mt-4">
            <div className="grid mb-12">
                <ImageSlider
                    images={[
                        ProductImg1,
                        ProductImg2,
                        ProductImg3,
                        ProductImg4,
                    ]}
                    thumbnails={[
                        ProductImgThumb1,
                        ProductImgThumb2,
                        ProductImgThumb3,
                        ProductImgThumb4,
                    ]}
                />
            </div>
            <div className="">
                <h3 className="text-md uppercase tracking-widest text-[#ff7d1a] font-bold mb-3">
                    Sneaker Company
                </h3>
                <h1 className="text-5xl max-w-96 font-bold mb-8">
                    Fall Limited Edition Sneakers
                </h1>
                <p className="max-w-[410px] text-[#68707d] mb-6">
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer stole,
                    they&rsquo;ll withstand everything the weather can offer.
                </p>
                <div className="flex justify-between lg:grid">
                    <div className="flex gap-3 mb-2">
                        <h2 className="text-3xl font-bold">$125.00</h2>
                        <span className="text-[#ff7d1a] bg-[#ffede0] font-bold px-2 text-center h-7 rounded-lg">
                            50&#x00025;
                        </span>
                    </div>
                    <s className="text-[#b6bcc8] font-bold">$250.00</s>
                </div>
                <div>
                    <div className="flex items-center mt-2 w-full p-2">
                        <Button className="bg-[#f7f8fd] hover:bg-#f7f8fd text-[#ff7d1a] text-lg font-bold px-5 w-full lg:w-auto rounded-tr-none rounded-br-none">
                            &minus;
                        </Button>
                        <p className="font-bold py-2 px-5 w-full text-center lg:w-auto bg-[#f7f8fd]">
                            0
                        </p>
                        <Button className="bg-[#f7f8fd] hover:bg-#f7f8fd text-[#ff7d1a] text-lg font-bold px-5 w-full lg:w-auto rounded-tl-none rounded-bl-none">
                            &#x0002B;
                        </Button>
                    </div>
                    {/* <!-- Add to cart button --> */}
                    <Button className="w-full lg:w-52 h-12 bg-[#ff7d1a] hover:bg-[#ff7d1a98] flex justify-evenly" >
                        <img
                            src={CartIcon}
                            alt="CartIcon"
                            className="brightness-200"
                            height={17}
                            width={17}
                        />
                        <span>Add to cart</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

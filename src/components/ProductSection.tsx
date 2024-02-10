import ProductImg1 from "../assets/images/image-product-1.jpg";
import ProductImg2 from "../assets/images/image-product-2.jpg";
import ProductImg3 from "../assets/images/image-product-3.jpg";
import ProductImg4 from "../assets/images/image-product-4.jpg";

import ProductImgThumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import ProductImgThumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import ProductImgThumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import ProductImgThumb4 from "../assets/images/image-product-4-thumbnail.jpg";

interface IThumb {
    thumb: string;
}

const ThumbImgsProducts = (choose: IThumb) => {
    return (
        <img
            src={choose.thumb}
            alt=""
            className="rounded-md"
            height={70}
            width={70}
        />
    );
};

export default function ProductSection() {
    function nextImg(e: React.MouseEvent<HTMLSpanElement>) {
        if (e.currentTarget.id == "thumb-1") {
            document
                .getElementById("product-img-1")
                ?.classList.remove("hidden");
            document.getElementById("product-img-2")?.classList.add("hidden");
            document.getElementById("product-img-3")?.classList.add("hidden");
            document.getElementById("product-img-4")?.classList.add("hidden");

            e.currentTarget.classList.add("bg-[#dddddd99]");
        }

        if (e.currentTarget.id == "thumb-2") {
            document.getElementById("product-img-1")?.classList.add("hidden");
            document
                .getElementById("product-img-2")
                ?.classList.remove("hidden");
            document.getElementById("product-img-3")?.classList.add("hidden");
            document.getElementById("product-img-4")?.classList.add("hidden");

            e.currentTarget.classList.add("bg-[#dddddd99]");
        }

        if (e.currentTarget.id == "thumb-3") {
            document.getElementById("product-img-1")?.classList.add("hidden");
            document.getElementById("product-img-2")?.classList.add("hidden");
            document
                .getElementById("product-img-3")
                ?.classList.remove("hidden");
            document.getElementById("product-img-4")?.classList.add("hidden");

            e.currentTarget.classList.add("bg-[#dddddd99]");
        }

        if (e.currentTarget.id == "thumb-4") {
            document.getElementById("product-img-1")?.classList.add("hidden");
            document.getElementById("product-img-2")?.classList.add("hidden");
            document.getElementById("product-img-3")?.classList.add("hidden");
            document
                .getElementById("product-img-4")
                ?.classList.remove("hidden");

            e.currentTarget.classList.add("bg-[#dddddd99]");
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen w-5/6 flex items-center justify-around ">
            <div className="grid gap-3">
                <div className="flex">
                    <img
                        src={ProductImg1}
                        alt="ProductImg"
                        height={320}
                        width={320}
                        className="rounded-md"
                        id="product-img-1"
                    />
                    <img
                        src={ProductImg2}
                        alt="ProductImg"
                        height={320}
                        width={320}
                        className="rounded-md hidden"
                        id="product-img-2"
                    />
                    <img
                        src={ProductImg3}
                        alt="ProductImg"
                        height={320}
                        width={320}
                        className="rounded-md hidden"
                        id="product-img-3"
                    />
                    <img
                        src={ProductImg4}
                        alt="ProductImg"
                        height={320}
                        width={320}
                        className="rounded-md hidden"
                        id="product-img-4"
                    />
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <ThumbImgsProducts thumb={ProductImgThumb1} />
                        <span
                            className="absolute bg-[#dddddd99]  w-full h-full top-0 border-solid rounded-md cursor-pointer"
                            id="thumb-1"
                            onClick={nextImg}
                        ></span>
                    </div>
                    <div className="relative">
                        <ThumbImgsProducts thumb={ProductImgThumb2} />
                        <span
                            className="absolute w-full h-full top-0 border-solid rounded-md cursor-pointer"
                            id="thumb-2"
                            onClick={nextImg}
                        ></span>
                    </div>
                    <div className="relative">
                        <ThumbImgsProducts thumb={ProductImgThumb3} />
                        <span
                            className="absolute w-full h-full top-0 border-solid rounded-md cursor-pointer"
                            id="thumb-3"
                            onClick={nextImg}
                        ></span>
                    </div>
                    <div className="relative">
                        <ThumbImgsProducts thumb={ProductImgThumb4} />
                        <span
                            className="absolute w-full h-full top-0 border-solid rounded-md cursor-pointer"
                            id="thumb-4"
                            onClick={nextImg}
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

import ProductImg1 from "@/assets/images/image-product-1.jpg";
import ProductImg2 from "@/assets/images/image-product-2.jpg";
import ProductImg3 from "@/assets/images/image-product-3.jpg";
import ProductImg4 from "@/assets/images/image-product-4.jpg";

import ProductImgThumb1 from "@/assets/images/image-product-1-thumbnail.jpg";
import ProductImgThumb2 from "@/assets/images/image-product-2-thumbnail.jpg";
import ProductImgThumb3 from "@/assets/images/image-product-3-thumbnail.jpg";
import ProductImgThumb4 from "@/assets/images/image-product-4-thumbnail.jpg";

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
        </div>
    );
}

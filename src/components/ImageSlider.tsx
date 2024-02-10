import { useState } from "react";

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
    <div className="flex flex-col gap-3">
      <div className="flex">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="ProductImg"
            height={320}
            width={320}
            className={`rounded-md ${selectedIndex === index ? "" : "hidden"}`}
            data-testid={`product-img-${index + 1}`}
          />
        ))}
      </div>
      <div className="flex gap-3">
        {thumbnails.map((thumbnail, index) => (
          <div key={thumbnail} className="relative">
            <img
              src={thumbnail}
              alt=""
              height={70}
              width={70}
              className="rounded-md cursor-pointer"
              onClick={() => handleImageClick(index)}
              data-testid={`thumb-${index + 1}`}
            />
            <span
              className={`absolute bg-[#dddddd99] w-full h-full top-0 border-solid rounded-md cursor-pointer border-2 border-[#ff7d1a] ${selectedIndex === index ? "flex" : "hidden"}`}
              data-testid={`thumb-lightbox-${index + 1}`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};
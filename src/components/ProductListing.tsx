import React from "react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface ProductProps {
  primaryImage: string;
  secondaryImage: string;
  designerName: string;
  productName: string;
  price: number;
  className?: string;
}

const ProductListing: React.FC<ProductProps> = ({
  primaryImage,
  secondaryImage,
  designerName,
  productName,
  price,
  className = "",
}) => {
  const titleClass = `${
    className.includes("small") ? "text-xs" : "text-sm"
  } font-semibold uppercase text-gray-900`;
  const productClass = `${
    className.includes("small") ? "text-xs" : "text-sm"
  } text-gray-600`;
  const priceClass = `${
    className.includes("small") ? "text-xs" : "text-sm"
  } font-semibold text-gray-900`;

  return (
    <div className={`flex flex-col items-start cursor-pointer ${className}`}>
      {/* Aspect Ratio Container with 2:3 ratio */}
      <AspectRatio ratio={2 / 3}>
        <div className="relative w-full h-full overflow-hidden rounded-md">
          {/* Primary Image */}
          <img
            src={primaryImage}
            alt={productName}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out"
          />
          {/* Secondary Image - fades in on hover */}
          <img
            src={secondaryImage}
            alt={`${productName} - Hover`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
          />
        </div>
      </AspectRatio>

      {/* Product Details */}
      <div className="mt-4">
        <h3 className={titleClass}>{designerName}</h3>
        <p className={productClass}>{productName}</p>
        <p className={priceClass}>${price}</p>
      </div>
    </div>
  );
};

export default ProductListing;

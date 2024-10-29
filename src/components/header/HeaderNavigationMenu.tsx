import React from "react";
import { ChevronRight } from "lucide-react";
import ProductListing from "@/components/ProductListing";

interface ProductProps {
  primaryImage: string;
  secondaryImage: string;
  designerName: string;
  productName: string;
  price: number;
}

type HeaderContent = {
  [section: string]: {
    categories: { [header: string]: string[] };
    products?: ProductProps[];
  };
};

interface NavigationMenuDemoProps {
  data: HeaderContent;
}

function NavigationMenuDemo({ data }: NavigationMenuDemoProps) {
  return (
    <nav className="w-full">
      <ul className="flex justify-around gap-4 px-4">
        {Object.entries(data).map(([section, content], sectionIndex) => (
          <li key={sectionIndex} className="relative group">
            <button className="text-lg font-semibold hover:text-purple-500">
              {section}
            </button>

            {/* Dropdown Content */}
            <div className="fixed left-0 right-0 top-24 bg-white shadow-lg py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="flex justify-center">
                <div className="flex gap-12 px-8 max-w-7xl w-full">
                  {/* Left Column: Categories */}
                  <div className="grid grid-cols-2 gap-8 w-1/2">
                    {Object.entries(content.categories).map(
                      ([header, items], headerIndex) => (
                        <div key={headerIndex}>
                          <a
                            href="#"
                            className="text-md font-semibold text-gray-900 hover:text-purple-500 flex items-center gap-2"
                          >
                            {header} <ChevronRight size={18} />
                          </a>
                          <ul className="mt-2 space-y-2">
                            {items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-900"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>

                  {/* Right Column: Product Listings */}
                  <div className="flex flex-wrap gap-4 w-1/2">
                    {content.products?.map((product, productIndex) => (
                      <ProductListing
                        key={productIndex}
                        primaryImage={product.primaryImage}
                        secondaryImage={product.secondaryImage}
                        designerName={product.designerName}
                        productName={product.productName}
                        price={product.price}
                        className="w-1/4"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const productCategories = ["Womenswear", "Menswear", "Accessories"];
const products: ProductProps[] = [
  {
    primaryImage:
      "https://img.perniaspopupshop.com/catalog/product/a/s/ASTC092303_1.jpg?impolicy=listingimagedesktop",
    secondaryImage:
      "https://img.perniaspopupshop.com/catalog/product/a/s/ASTC092303_2.jpg?impolicy=listingimagedesktop",
    designerName: "Astha Narang",
    productName: "Emerald Green Organza Sharara Set",
    price: 577,
  },
  {
    primaryImage:
      "https://img.perniaspopupshop.com/catalog/product/a/s/ASTC092303_1.jpg?impolicy=listingimagedesktop",
    secondaryImage:
      "https://img.perniaspopupshop.com/catalog/product/a/s/ASTC092303_2.jpg?impolicy=listingimagedesktop",
    designerName: "Another Designer",
    productName: "Stylish Red Lehenga",
    price: 750,
  },
];

const HeaderContentData: HeaderContent = {
  New: {
    categories: {
      "New This Month": productCategories,
      "New Designers": ["Arnab", "Ridha", "Namrata"],
    },
    products: products,
  },
  Sale: {
    categories: {
      "Shop By Category": productCategories,
    },
    products: products,
  },
};

export default function HeaderNavigationMenu() {
  return <NavigationMenuDemo data={HeaderContentData} />;
}

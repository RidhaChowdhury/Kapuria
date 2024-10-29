import React, { useState } from "react";
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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = (section: string) => {
    setActiveSection(section);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
    setActiveSection(null);
  };

  return (
    <nav className="w-full">
      <ul className="flex justify-center">
        {Object.entries(data).map(([section, content], sectionIndex) => (
          <li
            key={sectionIndex}
            className="group flex-1 flex justify-center items-center pb-4"
            onMouseEnter={() => handleMouseEnter(section)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-lg font-semibold ${
                isDropdownVisible && activeSection === section
                  ? "text-purple-500"
                  : ""
              }`}
            >
              {section}
            </button>

            {/* Dropdown Content */}
            {isDropdownVisible && activeSection === section && (
              <div className="fixed left-0 right-0 top-24 bg-white shadow-lg py-8 z-10">
                <div className="flex justify-center">
                  <div className="flex gap-12 px-8 max-w-7xl w-full">
                    {/* Left Column: Categories */}
                    <div className="grid grid-cols-2 gap-8 w-1/2 ml-16">
                      {Object.entries(content.categories).map(
                        ([header, items], headerIndex) => (
                          <div key={headerIndex}>
                            <a
                              href="#"
                              className="font-semibold text-gray-900 hover:text-purple-500 flex items-center gap-2"
                            >
                              {header} <ChevronRight size={18} />
                            </a>
                            <ul className="mt-2">
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
            )}
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
  Mens: {
    categories: {
      "Shop By Category": productCategories,
    },
    products: products,
  },
};

export default function HeaderNavigationMenu() {
  return <NavigationMenuDemo data={HeaderContentData} />;
}

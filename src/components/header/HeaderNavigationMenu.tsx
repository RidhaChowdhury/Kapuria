import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/base-ui/navigation-menu";
import * as React from "react";
import ProductListing from "@/components/ProductListing";
import { ChevronRight } from "lucide-react";

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
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(data).map(([section, content], sectionIndex) => (
          <NavigationMenuItem key={sectionIndex}>
            <NavigationMenuTrigger>{section}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col gap-4 p-4 sm:flex-row">
                {/* Left Column: Category Lists */}
                <div className="flex flex-col gap-4 sm:w-1/2">
                  {Object.entries(content.categories).map(
                    ([header, items], headerIndex) => (
                      <div
                        key={headerIndex}
                        className="flex flex-col whitespace-nowrap"
                      >
                        <a
                          href="#"
                          className="flex flex-row items-center text-black bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text transition-all duration-500 hover:text-transparent hover:opacity-100"
                        >
                          <span className="flex items-center">{header}</span>
                          <ChevronRight
                            size={18}
                            className="mt-1 transition-all duration-500 ease-in-out opacity-100 hover:opacity-0"
                          />
                        </a>

                        <div className="flex flex-col gap-2 sm:gap-4 mt-2">
                          {items.map((item, itemIndex) => (
                            <a
                              key={itemIndex}
                              href="#"
                              className="ml-2 text-gray-600 hover:text-gray-900"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Right Column: Product Listings (Hidden on mobile) */}
                <div className="hidden sm:flex flex-row gap-4 sm:w-1/2">
                  {content.products?.map((product, productIndex) => (
                    <ProductListing
                      key={productIndex}
                      primaryImage={product.primaryImage}
                      secondaryImage={product.secondaryImage}
                      designerName={product.designerName}
                      productName={product.productName}
                      price={product.price}
                      className="w-24 sm:w-32"
                    />
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
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
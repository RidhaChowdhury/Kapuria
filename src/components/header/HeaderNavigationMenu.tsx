import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/base-ui/navigation-menu";
import * as React from "react";

type HeaderContent = {
  [section: string]: {
    [header: string]: string[];
  };
};

interface NavigationMenuDemoProps {
  data: HeaderContent;
}

function NavigationMenuDemo({ data }: NavigationMenuDemoProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(data).map(([section, headers], sectionIndex) => (
          <NavigationMenuItem key={sectionIndex}>
            <NavigationMenuTrigger>{section}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col gap-6 sm:flex-row p-4">
                {Object.entries(headers).map(([header, items], headerIndex) => (
                  <div
                    key={headerIndex}
                    className="flex flex-col whitespace-nowrap"
                  >
                    <h2 className="text-lg font-semibold">{header}</h2>
                    {items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href="#"
                        className="text-gray-700 hover:text-gray-900"
                      >
                        {item}
                      </a>
                    ))}
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-700 font-semibold"
                    >
                      SEE ALL
                    </a>
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Example data
const productCategories = ["Womenswear", "Menswear", "Accessories"];

const HeaderContentData: HeaderContent = {
  New: {
    "New This Month": productCategories,
    "New Designers": ["Arnab", "Ridha", "Namrata"],
  },
  Sale: {
    "Shop By Category": productCategories,
    "New Designers": ["Arnab", "Ridha", "Namrata"],
  },
  
};

export default function HeaderNavigationMenu() {
  return <NavigationMenuDemo data={HeaderContentData} />;
}
import React from "react";
import { CurrencySelect } from "@/components/header/CurrencySelect";
import { MessageCircleQuestion, Search } from "lucide-react";
import HeaderNavigationMenu from "@/components/header/HeaderNavigationMenu";
import ProductListing from "@/components/ProductListing";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex flex-1 flex-col absolute top-0 w-full px-4">
        <div className="flex flex-row h-16 items-center justify-between relative">
          <CurrencySelect className="w-18" />

          {/* Centered Title */}
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold">
            Boutiques Collection
          </h1>

          <div className="flex flex-row gap-2">
            <MessageCircleQuestion />
            <Search />
          </div>
        </div>

        <div className="flex flex-row items-start justify-center">
          <HeaderNavigationMenu />
        </div>
      </div>
    </div>
  );
}

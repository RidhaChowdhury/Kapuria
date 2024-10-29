import React from "react";
import { CurrencySelect } from "@/components/header/CurrencySelect";
import { MessageCircleQuestion, Search } from "lucide-react";
import HeaderNavigationMenu from "@/components/header/HeaderNavigationMenu";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex flex-1 flex-col absolute top-0 w-full px-4">
        <div className="flex flex-row h-16 items-center justify-between">
          <CurrencySelect className="w-18" />
          <h1 className="text-2xl font-bold">Boutiques</h1>
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

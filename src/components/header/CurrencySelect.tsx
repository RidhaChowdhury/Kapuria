import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/base-ui/select";
import { useState } from "react";


export function CurrencySelect({className}:{className?:string}) {
    const [currency, setCurrency] = useState("usd");
    return (
    <div className={className}>
        <Select value={currency} onValueChange={setCurrency}>
        <SelectTrigger>
            <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
            </SelectGroup>
        </SelectContent>
        </Select>
    </div>
  );
}
"use client";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../i18n/navigation";
import { langData } from "@/src/data/lang-data";
import { Globe } from "lucide-react";
export const LanguageMenu = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const changeLanguage = (newLanguage: string) => {
    router.push(pathName, { locale: newLanguage });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full bg-transparent text-[13px] md:text-2xl focus-visible:ring-0 hover:bg-transparent cursor-pointer [&_svg:not([class*='size-'])]:size-[30px]"
        >
          <Globe className="w-[23px] h-[23px] md:w-8 md:h-8" /> {locale?.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-mainColor border-selectBorderColor">
        <div className="flex flex-col gap-[5px]">
          {langData.map((item: any) => (
            <DropdownMenuItem
              key={item.value}
              className={`bg-mainColor text-sm rounded-[5px] cursor-pointer font-poppins focus:bg-selectHoverColor items-center px-[5px] h-[32px] justify-between ${item.value === locale ? "text-white! bg-selectHoverColor!" : "text-textsecondary bg-mainColor hover:text-textsecondary!"
                }`}
              onClick={() => changeLanguage(item.value)}
            >
              {item.name}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageMenu;

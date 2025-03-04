"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sideBarLinks } from "../../constants";
import { usePathname } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger Icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-[#1C1F2E]">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">
              Interview IT
            </p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sideBarLinks.map((sideBarLink) => {
                  const isActive =
                    pathName === sideBarLink.route;
                  return (
                    <SheetClose asChild key={sideBarLink.route}>
                      <Link
                        href={sideBarLink.route}
                        key={sideBarLink.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-[#0E78F9]": isActive,
                          }
                        )}
                      >
                        <Image
                          src={sideBarLink.imgUrl}
                          alt={sideBarLink.label}
                          width={20}
                          height={20}
                        />
                        <DialogTitle title="" />
                        <p className="font-semibold">{sideBarLink.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

"use client";

import React from "react";
import { sideBarLinks } from "../../constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Sidebar = () => {
  const pathName = usePathname();
  
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-[#1C1F2E] p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sideBarLinks.map((sideBarLink) => {
          const isActive =
            pathName === sideBarLink.route ||
            pathName.startsWith(`${sideBarLink.route}/`);
          return (
            <Link
              href={sideBarLink.route}
              key={sideBarLink.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-[#0E78F9]": isActive,
                }
              )}
            >
              <Image
                src={sideBarLink.imgUrl}
                alt={sideBarLink.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {sideBarLink.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;

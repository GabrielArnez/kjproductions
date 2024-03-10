"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import cn from "classnames";
import { twMerge } from "tailwind-merge";

export function Header() {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  const handleShowResponsiveMenu = () => {};

  const menuItens = [
    {
      name: "Nossa historia",
      link: "#nossa-historia",
    },
    {
      name: "Galeria",
      link: "#galeria",
    },
    {
      name: "Depoimentos",
      link: "#depoimentos",
    },
  ];

  return (
    <nav className="flex items-center justify-between px-12 py-6 bg-cod-gray fixed w-full top-0 z-10 lg:px-32">
      <a href="#">
        <img
          className="w-28 h-7 lg:w-60 lg:h-14"
          src="/logo.svg"
          alt="Vercel Logo"
          priority
        />
      </a>
      <div className="hidden items-center gap-12 list-none lg:flex">
        {menuItens?.map((menuItem) => (
          <li key={menuItem?.name}>
            <a href={menuItem?.link} className="inter">
              {menuItem?.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contato"
            className="text-black inter bg-texas-rose rounded-sm p-3"
          >
            Entre em contato
          </a>
        </li>
      </div>
      <div className="lg:hidden" onClick={handleShowResponsiveMenu}>
        <Image
          src="/responsive_menu_icon.svg"
          alt="Vercel Logo"
          width={20}
          height={12}
          priority
          onClick={() => setShowResponsiveMenu(true)}
        />
      </div>
      <div
        className={twMerge(
          cn(
            "bg-cod-gray/80 absolute w-0 overflow-hidden inset-0 h-screen test",
            {
              "w-full": showResponsiveMenu,
            }
          )
        )}
      >
        <X
          className="absolute left-[70%] top-8"
          onClick={() => setShowResponsiveMenu(false)}
        />
        <div className="bg-cod-gray w-2/3 h-full px-6 py-8 z-20">
          <img
            className="w-28 h-7 lg:w-60 lg:h-14"
            src="/logo.svg"
            alt="Vercel Logo"
            priority
          />
          <div>
            <ul className="list-none mt-8 space-y-2">
              {menuItens?.map((menuItem) => (
                <li key={menuItem?.name}>
                  <a
                    href={menuItem?.link}
                    className="inter block hover:underline"
                  >
                    {menuItem?.name}
                  </a>
                </li>
              ))}
              <li className="w-fit pt-6">
                <a
                  href="#contato"
                  className="text-black inter bg-texas-rose rounded-sm p-3 block"
                >
                  Entre em contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";
import { DynamicOption, stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { ValueAnimationOptions } from "framer-motion";

import { Easing } from "framer-motion";

type MenuAnimation = [
  string,
  Record<string, unknown>,
  Partial<{
    at?: string;
    delay?: number;
    ease?: Easing | Easing[];
    duration?: number;
  }>
];


function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: MenuAnimation[] = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05) as unknown as number, at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            {
              delay: stagger(0.05, { from: "last" }) as unknown as number,
              at: "<",
            },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

  return scope;
}

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  return (
    <section className="flex justify-around items-center h-[6rem] backdrop-blur-sm mx-auto bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="mr-32 lg:mr-0">
        <Image src="/logo.png" alt="logo" width={104} height={104} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-around items-center space-x-6">
        {navLinks.map((link) => (
          <ul key={link.name}>
            <li>
              <Link
                href={link.path}
                className="p-4 px-6 hover:text-orange-500 rounded-lg transition duration-300 ease-in-out relative group"
                aria-current={pathname === link.path ? "page" : undefined}
              >
                <span
                  className={`${
                    pathname === link.path ? "font-bold text-orange-500" : ""
                  }`}
                >
                  {link.name}
                </span>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-in-out ${
                    pathname === link.path
                      ? "w-full bg-orange-500"
                      : "w-0 bg-transparent group-hover:w-full group-hover:bg-orange-500"
                  }`}
                ></span>
              </Link>
            </li>
          </ul>
        ))}
      </div>

      <div ref={scope} className="lg:hidden absolute top-8 right-4 z-50">
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </div>

      <div
        className={`bg-orange-500 h-screen z-100 shadow-2xl absolute top-0 right-0 p-8 flex flex-col items-end ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-start p-8 pt-10 space-y-6 text-white">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full ">
              <Link
                href={link.path}
                className={`text-xl font-bold ${
                  pathname === link.path
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                } transition-all duration-300`}
                aria-current={pathname === link.path ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                <h1>{link.name}</h1>
                <hr className="my-2 border-blue-400" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
    </section>
  );
}

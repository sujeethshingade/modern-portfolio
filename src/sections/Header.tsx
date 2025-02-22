"use client";

import { FC, useState, useEffect } from "react";
import Button from "@/components/Button";
import { motion, useAnimate } from "motion/react";

const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current, {
            translateY: 4,
          }
        ],
        [
          topLineScope.current, {
            rotate: 45,
          }
        ]
      ])
      bottomLineAnimate([
        [
          bottomLineScope.current, {
            translateY: -4,
          }
        ],
        [
          bottomLineScope.current, {
            rotate: -45,
          }
        ]
      ])
      navAnimate(navScope.current, { height: "100%", duration: 0.7 })
    }
    else {
      topLineAnimate([
        [
          topLineScope.current, {
            rotate: 0,
          }
        ],
        [
          topLineScope.current, {
            translateY: 0,
          }
        ]
      ])
      bottomLineAnimate([
        [
          bottomLineScope.current, {
            rotate: 0,
          }
        ],
        [
          bottomLineScope.current, {
            translateY: 0,
          }
        ]
      ])
      navAnimate(navScope.current, { height: "0%", duration: 0.7 })
    }
  }, [isOpen]);

  return (
    <header>
      <div className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-50" ref={navScope}>
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="text-stone-200 border-t border-stone-800 last:border-b py-8 group/nav-item relative isolate"
              onClick={() => setIsOpen(false)}
            >
              <div className="container !max-w-full flex items-center justify-between">
                <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">{label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </a>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-50">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <a href="/">
                <span className="font-bold uppercase text-xl text-white">Alex Taylor</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div className="border border-stone-400 bg-stone-200 size-11 rounded-full inline-flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect x="3" y="7" width="18" height="2" fill="currentColor" ref={topLineScope} style={{
                    transformOrigin: "12px 8px",
                  }} />
                  <motion.rect x="3" y="15" width="18" height="2" fill="currentColor" ref={bottomLineScope} style={{
                    transformOrigin: "12px 16px",
                  }} />
                </svg>
              </div>
              <Button className="hidden md:block" varient="primary">Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { FC } from "react";
import Button from "@/components/Button";

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
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
      <div className="container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          <div>
            <a href="/">
              <span className="font-bold uppercase text-xl" style={{ textShadow: '0 0 2px #e4e4e7, 0 0 10px #e4e4e7, 0 0 5px #e4e4e7' }}>Alex Taylor</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="border border-stone-400 bg-stone-200 size-11 rounded-full inline-flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </svg>
            </div>
            <Button className="hidden md:block" varient="primary">Contact Me</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  CodeBracketIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  GlobeAltIcon,
  UserIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Logo from "../assets/logos.png";
const products = [
  {
    name: "Git Sessions",
    description: "Learn basics of git and version control",
    href: "/se",
    icon: CodeBracketIcon,
  },
  {
    name: "AI & ML",
    description: "Get rolling and stay on top of the market",
    href: "#",
    icon: GlobeAltIcon,
  },
  {
    name: "BLockchain",
    description: "The true technology behind the blockchain",
    href: "#",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Interview preparation",
    description: "Ace interviews for internships and much more",
    href: "#",
    icon: UserIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle function
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white z-50 sticky top-0 shadow-sm">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-none">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="Logo" src={Logo} className="h-10 w-10" />
          </a>
        </div>
        <div className="lg:hidden">
            {!mobileMenuOpen && ( // Only show this button when the menu is closed
              <button
                type="button"
                onClick={toggleMobileMenu} // Toggle function here
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            )}
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12 mx-auto">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Sessions
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About us
          </a>
          <a href="/internships" className="text-sm font-semibold leading-6 text-gray-900">
            Internships
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Collaborations
          </a>
        </PopoverGroup>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={toggleMobileMenu} className="lg:hidden">
       
        <DialogPanel className="fixed inset-y-0 right-0 z-[60] w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <button
                type="button"
                onClick={toggleMobileMenu} // Toggle function here
                className="-m-2.5  items-center justify-center rounded-md p-2.5 text-gray-700"
                
              >
                <span className="sr-only">Open main menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
       
          <div className="mt-6 space-y-6">
            <Popover className="relative">
              <PopoverButton className="flex mt-12 pt-12 items-center gap-x-1 text-base font-semibold leading-6 text-gray-900">
                Sessions
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            <a href="/internships" className="block text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              Internships
            </a>
            <a href="/about-us" className="block text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              About us
            </a>
            <a href="/collaborations" className="block text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              Collaborations
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
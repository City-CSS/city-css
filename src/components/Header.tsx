"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.matchMedia("(min-width: 768px)").matches
        ? 150
        : 50;

      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 py-6 transition ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <a aria-label="Home" href="#"></a>

            <div className="hidden md:flex md:gap-x-6">
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#features"
              >
                Hello
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#testimonials"
              >
                Hello
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="/about"
              >
                Hello
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#pricing"
              >
                Hello
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block lg:block">
              <a
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold bg-[#0917bc] text-white active:bg-blue-800 active:text-blue-100"
                href="/contact"
              >
                <span>Hello</span>
              </a>
            </div>

            <div className="-mr-1 md:hidden">
              <div>
                <button
                  className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                  aria-label="Toggle Navigation"
                  type="button"
                  aria-expanded={mobileMenuOpen}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path
                      d="M0 1H14M0 7H14M0 13H14"
                      className={`origin-center transition ${
                        mobileMenuOpen ? "opacity-0" : ""
                      }`}
                    ></path>
                    <path
                      d="M2 2L12 12M12 2L2 12"
                      className={`origin-center transition scale-90 ${
                        mobileMenuOpen ? "opacity-100" : "opacity-0"
                      }`}
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                hidden={!mobileMenuOpen}
                className="absolute top-10 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div></div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        <a
                          href="#features"
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          Hello
                        </a>
                        <a
                          href="#testimonials"
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          Hello
                        </a>
                        <a
                          href="#pricing"
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          Hello
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

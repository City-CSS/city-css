export default function Footer() {
  return (
    <footer className="relative border-t border-gray-100 lg:pt-32 pb-8 dark:border-gray-800 lg:px-0 md:px-0 px-10">
      <div
        className="absolute inset-x-0 inset-y-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] top-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#c11c2f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="relative z-10 m-auto space-y-8 px-4 mt-20 mb-20 lg:mt-0 lg:mb-0 md:mt-0 md:mb-0 text-gray-600 dark:text-gray-400 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="grid grid-cols-8 gap-6 md:gap-0">
          <div className="col-span-8 md:col-span-2 lg:col-span-3">
            <div className="flex h-full items-center justify-between gap-6 border-b border-white py-6 dark:border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
              <div>
                <a href="/" className="mt-2 inline-block text-sm">
                  Designed with Love
                </a>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/ditta.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                  className="hover:text-primary dark:hover:text-primaryLight"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    ></path>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/dittatech/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                  className="hover:text-primary dark:hover:text-primaryLight"
                >
                  <span className="sr-only">Linkedin</span>
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-8 md:col-span-6 lg:col-span-5">
            <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
              <div>
                <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                  Company
                </h2>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      FAQs{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      Carrers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                  Products
                </h2>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      Change Log
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      Commercialisti
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                  Resources
                </h2>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      Novità Legislative Contabili{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      Guide per la tua ditta{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                    >
                      Glossario Semplificato{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm">
              Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 pt-6 md:pt-0">
              <a
                href="/privacy"
                className="text-sm hover:text-primary dark:hover:text-primaryLight"
              >
                Privacy{" "}
              </a>
              <a
                href="/terms"
                className="text-sm hover:text-primary dark:hover:text-primaryLight"
              >
                T&C{" "}
              </a>
              <a
                href="/cookie"
                className="text-sm hover:text-primary dark:hover:text-primaryLight"
              >
                Cookies{" "}
              </a>{" "}
              <a
                href="/aup"
                className="text-sm hover:text-primary dark:hover:text-primaryLight"
              >
                AUP
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

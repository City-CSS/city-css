import Image from "next/image";
import Cube from "../assets/cube.png";
import React from "react";
import { FaGraduationCap, FaLinkedinIn, FaInstagram, FaWhatsapp, FaDiscord, FaEnvelope } from "react-icons/fa";
import { IconType } from "react-icons";

const linkPropsSociety = [
  {
    name: "Student Union",
    link: "https://www.csgsu.co.uk/community/societies/society/css/",
    icon: FaGraduationCap
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/css-city/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/css_city/",
    icon: FaInstagram
  }
]
const linkPropsGetInTouch = [
  {
    name: "WhatsApp",
    link: "https://chat.whatsapp.com/JENi7yzZA5T4wFDWIEqb03",
    icon: FaWhatsapp
  },
  {
    name: "Discord",
    link: "https://discord.com/invite/MqzTbKsu",
    icon: FaDiscord
  },
  {
    name: "Email",
    link: "mailto: citycss@outlook.com",
    icon: FaEnvelope
  }
]

export default function Footer() {
  return (
    <div className="relative border-t border-gray-100 pt-6 lg:pt-16 pb-8 dark:border-gray-800 lg:px-0 md:px-0 px-10">
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
                <Image src={Cube} alt="City University Logo" className="w-24" />
                <a href="/" className="mt-2 inline-block text-sm">
                  Designed with Love
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-8 md:col-span-6 lg:col-span-5">
            <div className="grid grid-cols-2 gap-6 pb-8 sm:grid-cols-3 md:pl-12">
              <Column
                  title={"Society"}
                  props={linkPropsSociety}
              />
              <Column
                  title={"Get In Touch"}
                  props={linkPropsGetInTouch}
              />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Used to display columns of links in the Footer
function Column (
    {
      title,
      props
    }: {
      title : string
      props: { name: string; link: string; icon: IconType }[]
    }
) {
  return (
      <div>
        {/* Title */}
        <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
          {title}
        </h2>

        {/* List of Items */}
        <div className="mt-4 space-y-4">
          {props.map((prop, index) => (
              <div key={index}>
                <a
                    target="_blank"
                    href={prop.link}
                    className="text-base duration-100 hover:text-primary dark:hover:text-white inline-flex items-center gap-2"
                >
                  {/* Icon */}
                  <prop.icon className="text-gray-600 hover:text-gray-900" size={20} />
                  {/* Name */}
                  {prop.name}
                </a>
              </div>
          ))}
        </div>
      </div>
  );
}

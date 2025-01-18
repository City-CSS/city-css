import React from "react";
// Components
import Header from "../../components/Header";
import Heading from ".//components/Heading";
import ImageGallery from ".//components/ImageGallery";
import Program from "./components/Program";
import Committee from ".//components/Committee";
import Event from ".//components/Event";
import Section from "./components/Section";
import SponsorForm from "@/components/SponsorForm";
// Data
import committee from ".//data/committee.json";
import events from ".//data/events.json";

import {
    FaLaptopCode,
    FaHandshake,
} from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import Footer from "@/components/Footer";

const gallery_images = [
    '/about-us/gallery/welcome_day.png',
    '/about-us/gallery/industry_talk_wolfgang.png',
    '/about-us/gallery/industry_talk_angelica.png'
];

const linkClassName = "text-red-600 hover:text-red-800 underline decoration-dotted underline-offset-4 transition-colors duration-200";

function page() {
    return (
        <div>
            <Header/>

            {/*Our mission section*/}
            <Heading
                title={"Our mission"}
            />
            <div className="flex flex-col md:flex-row my-16">
                <div className="w-full md:w-1/2 p-4">
                    <ImageGallery images={gallery_images}/>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
                    <p className="text-base text-gray-700 md:text-lg">
                        At the City Computer Science Society, we <a
                        href={"/internships"}
                        className={linkClassName}>
                        connect
                    </a> students and industry experts <br/>
                        We <a
                        href={"/#"} // TODO: change to "/interview-prep" when it's ready
                        className={linkClassName}>
                        bring
                    </a> experience and opportunities for our participants <br/>
                        We <a
                        href={"/"}
                        className={linkClassName}>
                        believe
                    </a> in importance of having a strong community of like-minded people at City <br/>
                        We <a
                        href={"/#"} //TODO: change to "/collaborations" when it's ready
                        className={linkClassName}>
                        collaborate
                    </a> closely with other Computer Science societies and companies
                        in the industry to be a bridge for students who want to discover more


                    </p>
                </div>
            </div>

            {/*Our program section*/}
            <Section
                heading="Our program"
                gridClasses="md:grid-cols-3 md:max-w-screen-xl md:mx-16 md:my-16 md:gap-10 md:text-lg"
            >
                <Program
                    icon={FaLaptopCode}
                    title="Workshops"
                    description="Educational modules for students to provide them insights
                    and hands-on experience in Software Engineering,
                    AI & ML and Blockchain"
                />
                <Program
                    icon={FaHandshake}
                    title="Industry Talks"
                    description="Talks and presentations given by industry experts
                    on their experience, insights and the latest trends in the field"
                />
                <Program
                    icon={BsChatDots}
                    title="Socials"
                    description="Entertaining events for students to connect with peers and have fun"
                />
            </Section>
            <div className="my-16">
                <SponsorForm/>
            </div>

            {/*Our events section*/}
            <Section
                heading={"Our events"}
                gridClasses={"md:grid-cols-3 md:max-w-screen-xl md:gap-6 md:mx-6 md:my-16" +
                    "lg:max-w-none lg:grid-cols-4 lg:mx-16 lg:my-16 lg:gap-10 lg:text-base"}
            >
                {/*when adding a new event please add at the top (stack) */}
                {events.map((event, index) => (
                    <Event
                        key={index}
                        imageSrc={event.imageSrc}
                        title={event.title}
                        date={event.date}
                        description={event.description}
                    />
                ))}
            </Section>

            {/*Our committee section*/}
            <Section
                heading={"Our committee"}
                gridClasses={"md:grid-cols-4 md:max-w-screen-xl md:mx-16 md:my-16 md:gap-10 md:text-base"}
                initialGrid={2}
            >
                {committee.map((member, index) => (
                    <Committee
                        key={index}
                        imageSrc={member.imageSrc}
                        name={member.name}
                        role={member.role}
                        linkedInLink={member.linkedInLink}
                    />
                ))}
            </Section>
            <Footer/>
        </div>
    );
}

export default page;
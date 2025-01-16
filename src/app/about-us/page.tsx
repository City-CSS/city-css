import React from "react";
import Header from "../../components/Header";
import Heading from ".//components/Heading";
import ImageGallery from ".//components/ImageGallery";
import Program from "./components/Program";
import Committee from ".//components/Committee";
import Event from ".//components/Event";
import Section from "./components/Section";

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
const event_images = [
    '/about-us/events/industry_talk_angelica.png',
    '/about-us/events/industry_talk_anthony.png',
    '/about-us/events/advent_of_code.jpg',
    '/about-us/events/ai_session.png',
    '/about-us/events/industry_talk_wofgang.png',
    '/about-us/events/zero_to_hero.png',
    '/about-us/events/se_session.png',
    '/about-us/events/welcome_day.png'
];
const committee_images = [
    '/about-us/committee/danylo.jpg',
    '/about-us/committee/filippo.png',
    '/about-us/committee/aisari.jpeg',
    '/about-us/committee/karolina.png'
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
            <div className="flex flex-col md:flex-row my-12">
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
                gridClasses="md:grid-cols-3 md:max-w-screen-xl md:mx-16 md:my-12 md:gap-10 md:text-lg"
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


            {/*Our events section*/}
            <Section
                heading={"Our events"}
                gridClasses={"md:grid-cols-3 md:max-w-screen-xl md:gap-6 md:mx-6 md:my-12" +
                    "lg:max-w-none lg:grid-cols-4 lg:mx-16 lg:my-12 lg:gap-10 lg:text-base"}
            >
                <Event
                    imageSrc={event_images[0]}
                    title={"In Conversation with Angelica Ortega"}
                    date={"10th December 2024"}
                    description={"Angelica gave a speech on the details of crafting a winning CV and dived into Start-ups vs Corporates"}
                />
                <Event
                    imageSrc={event_images[1]}
                    title={"In Conversation with Anthony Finkelstein"}
                    date={"5th December 2024"}
                    description={"Sir Professor Anthony shared insights on his remarkable career working in the government sector"}
                />
                <Event
                    imageSrc={event_images[2]}
                    title={"Advent of Code"}
                    date={"1st December 2024"}
                    description={"Advent of Code is an annual programming competition. This year, the society hosted a private leaderboard for City students"}
                />
                <Event
                    imageSrc={event_images[3]}
                    title={"First session of AI & ML module"}
                    date={"20th November 2024"}
                    description={"Karolina gave a talk on the basics of AI & ML and how it can be applied in real-world scenarios"}
                />
                <Event
                    imageSrc={event_images[4]}
                    title={"In Conversation with Wolfgang Emmerich"}
                    date={"14th November 2024"}
                    description={"Wolfgang shared his experience of leading a company that built the Covid-19 App for England and Wales"}
                />
                <Event
                    imageSrc={event_images[5]}
                    title={"React Workshop: Zero to Hero"}
                    date={"14th November 2024"}
                    description={"Filippo gave a workshop on React.js and how it can be used to build a web application"}
                />
                <Event
                    imageSrc={event_images[6]}
                    title={"First Session of SE module"}
                    date={"15th October 2024"}
                    description={"Filippo delivered a Software Engineering module where he dived into the git workflow and how to use it effectively "}
                />
                <Event
                    imageSrc={event_images[7]}
                    title={"Welcome Day"}
                    date={"4th October 2024"}
                    description={"The society hosted a welcome day to get to know each other and introduce the plans for the year ahead"}
                />
            </Section>


            {/*Our committee section*/}
            <Section
                heading={"Our committee"}
                gridClasses={"md:grid-cols-4 md:max-w-screen-xl md:mx-16 md:my-12 md:gap-10 md:text-base"}
                initialGrid={2}
            >
                <Committee
                    imageSrc={committee_images[0]}
                    name={"Danylo Piatyhorets"}
                    role={"President"}
                    linkedInLink={"https://www.linkedin.com/in/danylo-piatyhorets-1bb16b293/"}
                />
                <Committee
                    imageSrc={committee_images[1]}
                    name={"Filippo Vicini"}
                    role={"Vice President | Tech Officer"}
                    linkedInLink={"https://www.linkedin.com/in/filippo-vicini-6ab35921a/"}
                />
                <Committee
                    imageSrc={committee_images[2]}
                    name={"Aisari Amirov"}
                    role={"Communication Officer"}
                    linkedInLink={"https://www.linkedin.com/in/aisari-amirov-837164294/"}
                />
                <Committee
                    imageSrc={committee_images[3]}
                    name={"Karolina Wasnik"}
                    role={"Finance & Event Officer"}
                    linkedInLink={"https://www.linkedin.com/in/karolina-wasnik/"}
                />
            </Section>
            <Footer/>
        </div>
    );
}

export default page;
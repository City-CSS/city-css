import React from "react";
import { FaComments, FaFilePdf } from "react-icons/fa";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import ShimmerButton from "@/components/magicui/shimmer-button";

const DetailedCard = ({
  title,
  description,
  date,
  comments,
  tags,
  icon,
  svgImage,
}) => (
  <div className="shadow-lg p-4 bg-white rounded-lg w-full max-w-xs">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium">{title}</span>
      <span className="text-xs text-gray-500">{date}</span>
    </div>
    <p className="text-xs text-gray-500 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <div className="flex space-x-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-2 text-gray-500">
        {icon && <FaFilePdf className="text-red-600" />}
        <FaComments />
        <span className="text-xs">{comments}</span>
      </div>
      {svgImage && (
        <div className=" flex justify-center">
          <img src={svgImage} alt="SVG Illustration" className="h-10 w-15" />
        </div>
      )}
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative isolate">
        <div
          className="absolute z-50 inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] md:w-[50rem] lg:w-[60rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative bg-gray-50 min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
          <div className="absolute top-6 -left-12 transform -rotate-12 hidden sm:block">
            <DetailedCard
              title="hello"
              description="E risparmia tempo prezioso"
              date="21/03/22"
              comments={12}
              tags={["Feedback", "Design "]}
            />
          </div>
          <div className="absolute bottom-20 -right-12 transform -rotate-3 hidden sm:block">
            <DetailedCard
              title="$45.000"
              date="D-3"
              comments={8}
              tags={["Design System"]}
            />
          </div>

          <div className="absolute bottom-20 -left-12 transform rotate-6 hidden sm:block">
            <DetailedCard
              title="Supporto clienti"
              description="Amiamo i nostri clienti e siamo aperti a feedback"
              date="12/07/23"
              comments={5}
              tags={["Support"]}
            />
          </div>
          <div className="absolute top-4 -right-20 transform -rotate-12 hidden sm:block">
            <DetailedCard
              title="Velocità di sviluppo"
              description="Per offrire il servizio migliore"
              date="18/08/23"
              comments={9}
              tags={["Development"]}
            />
          </div>
          <div className="absolute top-48 -left-10 transform rotate-12 hidden sm:block">
            <DetailedCard
              title="Inventario Integrato"
              description="Per avere tutto sotto controllo"
              date="15/06/23"
              comments={7}
              tags={["Inventory"]}
            />
          </div>
          <div className="absolute bottom-56 -left-10 transform -rotate-12 hidden sm:block">
            <DetailedCard
              title="Grafica intuitiva"
              description="Prioritizziamo la semplicità e funzionalità"
              date="30/04/23"
              comments={6}
              tags={["UI/UX"]}
            />
          </div>
          <div className="absolute top-40 -right-20 transform rotate-6 hidden sm:block">
            <DetailedCard
              title="Sviluppato per tutti"
              description="Ditta può essere usato da chiunque"
              date="25/05/23"
              comments={4}
              tags={["Accessibility"]}
            />
          </div>
          <div className="absolute bottom-52 -right-16 transform -rotate-12 hidden sm:block">
            <DetailedCard
              title="Estratti conto"
              description="Accedi alle tue finanze dalla nostra piattaforma"
              date="22/03/23"
              comments={10}
              tags={["Finance"]}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-12">
            <div className="mb-6 bg-white-500 rounded-full flex items-center justify-center"></div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-3">
              Welcome to City University <br />
              Computer Science Society
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Ci basta la tua mail per aggiornarti sullo sviluppo e aiutarci
              nello sviluppo <br />
              della piattaforma Iscriviti Ora!
            </p>

            <div className="flex flex-col bg-white z-50  sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 mb-4">
              <input
                type="email"
                placeholder="Inserisci la tua mail"
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-green-300 w-full sm:w-auto"
              />
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Shimmer Button
                </span>
              </ShimmerButton>
            </div>
            <p className="text-sm text-gray-500">
              <span role="img" aria-label="calendar">
                🗓️
              </span>{" "}
              Unisciti per partecipare alla fase di testing
            </p>
          </div>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={60}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] w-full h-full",
        )}
      />
    </div>
  );
};

export default Hero;

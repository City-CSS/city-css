export default function Banner() {
  return (
    // banner
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-red-500 py-24 bg-gradient-to-r from-[#a73737] to-[#7a2828]"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-4xl tracking-tight text-white font-semibold sm:text-5xl">
            Join CSS
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Become part of a thriving community dedicated to exploring
            technology, building skills, and advancing your career.{" "}
          </p>
          <a
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
            href="mailto: citycss@outlook.com "
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
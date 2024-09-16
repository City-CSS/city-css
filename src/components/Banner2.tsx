export default function Banner() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-red-500 py-24 bg-gradient-to-r from-[#a73737] to-[#7a2828]"
    >
      <img
        alt="University Campus Background"
        loading="lazy"
        width="2347"
        height="1244"
        decoding="async"
        data-nimg="1"
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        style={{ color: "transparent" }}
        src="/_next/static/media/background-call-to-action.6a5a5672.jpg"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-4xl tracking-tight text-white font-semibold sm:text-5xl">
            Want to sponsor?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Become part of a thriving community dedicated to exploring
            technology, building skills, and advancing your career.{" "}
          </p>
          <a
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
            href="/contact"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

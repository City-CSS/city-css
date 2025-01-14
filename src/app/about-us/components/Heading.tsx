export default function Heading(
    {title}
) {
    return (
        // banner
        <section
            id="get-started-today"
            className="relative overflow-hidden bg-red-500 py-6 bg-gradient-to-r from-[#a73737] to-[#7a2828]"
        >
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="font-display text-3xl tracking-tight text-white font-semibold sm:text-4xl">
                        {title}
                    </h2>
                </div>
            </div>
        </section>
    );
}
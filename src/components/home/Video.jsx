export default function Video() {
    return (
        <section className="bg-[#051a50] flex justify-center items-center py-10 lg:py-20">
            <div className="w-full max-w-3xl px-4">
                <video
                    className="w-full rounded-2xl shadow-lg"
                    controls
                    autoPlay
                    loop
                    muted
                >
                    <source src="/videos/HyR.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
            </div>
        </section>
    );
}

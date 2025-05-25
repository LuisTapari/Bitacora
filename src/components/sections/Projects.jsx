import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-white to-gray-500 bg-clip-text text-transparent text-center">
                    Trabajos realizados o Nuestros servicios
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Lorem ipsum dolor </h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit, repudiandae cumque nesciunt est porro cupiditate sapiente eius quidem temporibus fugiat illo?</p>
                        <div>
                            {["x servicio", "x servicio", "x servicio"].map((productora, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.2)] transition-all">
                                        {productora}
                                </span>
                                ))}
                        </div>
                    <div className="flex justify-center items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> más info</a>
                    </div>
                    </div>
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Lorem ipsum dolor </h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit, repudiandae cumque nesciunt est porro cupiditate sapiente eius quidem temporibus fugiat illo?</p>
                        <div>
                            {["x servicio", "x servicio", "x servicio"].map((productora, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.2)] transition-all">
                                        {productora}
                                </span>
                                ))}
                        </div>
                    <div className="flex justify-center items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> más info</a>
                    </div>
                    </div>
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Lorem ipsum dolor </h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit, repudiandae cumque nesciunt est porro cupiditate sapiente eius quidem temporibus fugiat illo?</p>
                        <div>
                            {["x servicio", "x servicio", "x servicio"].map((productora, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.2)] transition-all">
                                        {productora}
                                </span>
                                ))}
                        </div>
                    <div className="flex justify-center items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> más info</a>
                    </div>
                    </div>
                    <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Lorem ipsum dolor </h3>
                        <p className="text-gray-400 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit, repudiandae cumque nesciunt est porro cupiditate sapiente eius quidem temporibus fugiat illo?</p>
                        <div>
                            {["x servicio", "x servicio", "x servicio"].map((productora, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,2246,0.2)] transition-all">
                                        {productora}
                                </span>
                                ))}
                        </div>
                    <div className="flex justify-center items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> más info</a>
                    </div>
                    </div> 
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}

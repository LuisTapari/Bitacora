import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const nuestrosTrabajos = [
        "img1.jpg",
        "img2.jpg",
        "img3.jpg",
        "img4.jpg",
        "img5.jpg",
        "img6.jpg",
        "img7.jpg",
    ]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4"> 
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r  from-white to-gray-500 bg-clip-text text-transparent text-center">Sobre nosotros</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Somos un grupo de productores audiovisuales y creadores de contenido apasionados por la captura de los momentos más importantes de la vida. Nos encontramos en Carlos Paz, dentro de la Provincia de Cordoba.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-center">Algunos de nuestros trabajos</h3>
                            <div className="flex flex-wrap gap-2">
                                {nuestrosTrabajos.map((productora, key) => (
                                    <span key={key}
                                    className="bg-blue-500 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition">
                                        {productora}
                                    </span>
                                ))}
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-center"> 📹🎆 ¿Por qué elegirnos? 🎆📹</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li className="mb-2">🎥 Experiencia en el sector audiovisual.</li>
                            <li className="mb-2">🎥 Alta calidad de producción.</li>
                            <li className="mb-2">🎥 Creatividad y originalidad en cada proyecto.</li>
                            <li className="mb-2">🎥 Compromiso con nuestros clientes.</li>
                            <li className="mb-2">🎥 Flexibilidad y adaptabilidad a tus necesidades.</li>
                            <li className="mb-2">🎥 Uso de tecnología de vanguardia</li>
                            <li className="mb-2">🎥 Atención personalizada y cercana.</li>
                            <li className="mb-2">🎥 Entregas rápidas y eficientes.</li>
                            <li className="mb-2">🎥 Precios competitivos y transparentes.</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-center"> 💼 Nuestros Trabajos 💼 </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Lorem ipsum, dolor sit </h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem architecto minus, doloribus sequi dignissimos tenetur cumque repellendus illum aut praesentium quidem reiciendis amet natus! Nulla reiciendis odio magni pariatur dolorum!</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Lorem ipsum, dolor sit </h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem architecto minus, doloribus sequi dignissimos tenetur cumque repellendus illum aut praesentium quidem reiciendis amet natus! Nulla reiciendis odio magni pariatur dolorum!</p>
                            </div>

                        </div>
                    </div>

                </div>
                </div>
                </RevealOnScroll>
        </section>
    )
}

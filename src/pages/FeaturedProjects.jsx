import { motion } from "framer-motion";
import { FaGithub, FaArrowRight, FaGooglePlay, FaAppStore } from "react-icons/fa";

import { HiOutlineExternalLink, HiOutlineDeviceMobile } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const projects = [
    {
        title: "AI SaaS Dashboard",
        description: "A comprehensive analytics platform for neural network performance featuring real-time inference monitoring and automated reporting modules.",
        image: "https://res.cloudinary.com/dhs5i1k5f/image/upload/v1779101644/Portfolio/ChatGPT_Image_May_18_2026_04_22_29_PM_xgfowg.png",
        tags: ["React", "OpenAI API", "Tailwind"],
        large: true,
    },
    {
        title: "MERN Job Board",
        description: "A full-stack ecosystem for connecting developers with high-growth startups featuring advanced filtering.",
        image: "https://res.cloudinary.com/dhs5i1k5f/image/upload/v1779103536/Portfolio/ChatGPT_Image_May_18_2026_04_55_24_PM_ycjqhf.png",
        tags: ["MongoDB", "Express"],
        small: true,
    },
    {
        title: "Real-time Chat Engine",
        description: "Low-latency messaging architecture with end-to-end encryption and global presence synchronization.",
        image: "https://res.cloudinary.com/dhs5i1k5f/image/upload/v1779100833/Portfolio/ChatGPT_Image_May_18_2026_04_00_11_PM_fgdbfj.png",
        tags: ["Socket.io", "Redis"],
        medium: true,
    },
    {
        title: "Eco-Track Mobile",
        description: "Sustainable lifestyle tracking app with gamified rewards and supply chain transparency visualizations.",
        image: "https://i.pinimg.com/1200x/36/d2/c4/36d2c4b1e4d157e5301056ad00446792.jpg",
        tags: ["App Store", "Play Store"],
        mobile: true,
    },
];

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
};

export default function FeaturedProjects() {
    const navigate = useNavigate();
    return (
        <section className="relative overflow-hidden bg-[#050816] px-6 py-28 text-white md:px-10">
            {/* Background */}
            <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

            <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* ================= HEADER ================= */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#c9a7ff]">
                        Portfolio
                    </p>

                    <h2 className="feat-font text-5xl font-black leading-tight tracking-tight text-[#e7e4ff] md:text-7xl">
                        Digital Craftsmanship &
                        <br />
                        <span className="text-[#2fe0ff]">
                            Premium Engineering
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-xl leading-[1.8] text-[#b3b3cc]">
                        A curated selection of architectural solutions focused
                        on scalability, performance, and immersive user
                        experiences.
                    </p>
                </motion.div>

                {/* ================= PROJECT GRID ================= */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* LARGE FEATURED */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{
                            y: -6,
                        }}
                        className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#070f2a]/70 backdrop-blur-xl lg:col-span-8"
                    >
                        <div className="grid h-full md:grid-cols-2">
                            {/* IMAGE */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={projects[0].image}
                                    alt={projects[0].title}
                                    className="h-full min-h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col justify-center p-10">
                                <div className="mb-6 flex flex-wrap gap-3">
                                    {projects[0].tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full bg-[#161d3d] px-4 py-2 text-sm font-bold text-[#c9a7ff]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-4xl font-bold tracking-tight text-[#e7e4ff]">
                                    {projects[0].title}
                                </h3>

                                <p className="mt-6 text-[1.1rem] leading-[1.9] text-[#b3b3cc]">
                                    {projects[0].description}
                                </p>

                                <div className="mt-10 flex flex-wrap gap-4">
                                    <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#a970ff] to-[#6f8cff] px-7 py-4 text-lg font-bold text-white transition hover:scale-[0.98]">
                                        Live Demo
                                        <HiOutlineExternalLink />
                                    </button>

                                    <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-lg font-bold text-white transition hover:bg-white/10">
                                        GitHub
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* SIDE CARD */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{
                            y: -6,
                        }}
                        className="group flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[#070f2a]/70 backdrop-blur-xl lg:col-span-4"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={projects[1].image}
                                alt={projects[1].title}
                                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050816]" />
                        </div>

                        <div className="flex flex-1 flex-col p-8">
                            <div className="mb-5 flex gap-3">
                                {projects[1].tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="rounded-full bg-[#161d3d] px-4 py-2 text-sm font-bold text-[#c9a7ff]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-4xl font-bold tracking-tight text-[#e7e4ff]">
                                {projects[1].title}
                            </h3>

                            <p className="mt-5 text-[1.05rem] leading-[1.8] text-[#b3b3cc]">
                                {projects[1].description}
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8">
                                <button className="flex items-center gap-2 text-lg font-bold text-[#2fe0ff]">
                                    Case Study
                                    <FaArrowRight className="text-sm" />
                                </button>

                                <FaGithub className="text-2xl text-[#5b648d]" />
                            </div>
                        </div>
                    </motion.div>

                    {/* CHAT ENGINE */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{
                            y: -6,
                        }}
                        className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#070f2a]/70 backdrop-blur-xl lg:col-span-5"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={projects[2].image}
                                alt={projects[2].title}
                                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-tr from-[#050816] to-transparent" />
                        </div>

                        <div className="p-8">
                            <div className="mb-5 flex gap-3">
                                {projects[2].tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="rounded-full bg-[#161d3d] px-4 py-2 text-sm font-bold text-[#2fe0ff]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-4xl font-bold tracking-tight text-[#e7e4ff]">
                                {projects[2].title}
                            </h3>

                            <p className="mt-5 text-[1.05rem] leading-[1.8] text-[#b3b3cc]">
                                {projects[2].description}
                            </p>
                        </div>
                    </motion.div>

                    {/* MOBILE APP */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{
                            y: -6,
                        }}
                        className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#070f2a]/70 backdrop-blur-xl lg:col-span-7"
                    >
                        <div className="grid h-full md:grid-cols-2">
                            {/* LEFT */}
                            <div className="flex flex-col justify-center p-10">
                                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#161d3d] text-4xl text-[#c9a7ff]">
                                    <HiOutlineDeviceMobile />
                                </div>

                                <h3 className="text-4xl font-bold tracking-tight text-[#e7e4ff]">
                                    {projects[3].title}
                                </h3>

                                <p className="mt-5 text-[1.05rem] leading-[1.8] text-[#b3b3cc]">
                                    {projects[3].description}
                                </p>

                                <div className="mt-8 flex flex-wrap gap-6">
                                    <div className="flex items-center gap-2 text-[#b3b3cc]">
                                        <FaAppStore />
                                        <span className="font-semibold">
                                            App Store
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-[#b3b3cc]">
                                        <FaGooglePlay />
                                        <span className="font-semibold">
                                            Play Store
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* IMAGE */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={projects[3].image}
                                    alt={projects[3].title}
                                    className="h-full min-h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050816]/40" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ================= CTA ================= */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative mt-28 overflow-hidden rounded-[40px] border border-white/10 bg-[#0b122d] px-8 py-20 text-center"
                >
                    {/* Glow */}
                    <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

                    <div className="relative z-10">
                        <h2 className="feat-font text-4xl font-bold tracking-tight text-[#e7e4ff] md:text-6xl">
                            Have a vision in mind?
                        </h2>

                        <p className="mx-auto mt-8 max-w-3xl text-xl leading-[1.8] text-[#b3b3cc]">
                            Let’s collaborate to build something exceptional. I am
                            currently available for new projects and engineering
                            consultations.
                        </p>

                        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
                            <button onClick={() => navigate('/experience#contact')} className="rounded-full bg-[#a970ff] px-10 py-5 text-lg font-bold text-[#120322] transition hover:scale-[0.98]">
                                Start a Project
                            </button>

                            <button onClick={() => navigate('/experience#contact')} className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-lg font-bold text-white transition hover:bg-white/10">
                                View All Labs
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
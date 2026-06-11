import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { HiOutlineTerminal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const floatingAnimation = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
};

const techBadgesLeft = [
    {
        icon: <SiMongodb size={28} />,
        rotate: "-rotate-12",
    },
    {
        icon: <FaNodeJs size={28} />,
        rotate: "rotate-6",
    },
];

const techBadgesRight = [
    {
        icon: <FaReact size={36} />,
        rotate: "rotate-12",
    },
    {
        icon: <HiOutlineTerminal size={30} />,
        rotate: "-rotate-6",
    },
];

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
            {/* Background */}
            <div className="pointer-events-none fixed inset-0 z-0">
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(139,92,246,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.2) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Glow */}
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[140px]" />
                <div className="absolute left-20 top-20 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
            </div>

            {/* Hero Section */}
            <main className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-20 pt-40 md:px-16">
                <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
                    {/* Availability Badge */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400"></span>
                        </span>

                        <span className="text-xs font-semibold uppercase tracking-widest md:tracking-[0.2em] text-zinc-300">
                            Available for opportunities
                        </span>
                    </motion.div>

                    {/* Intro */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                        className="mb-5"
                    >
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-300">
                            Hello, I’m Ameer Suhail
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {[
                                "MERN Stack Developer",
                                "Full Stack Engineer",
                                "Frontend Architect",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                        className="feat-font max-w-5xl bg-gradient-to-r from-white via-violet-200 to-blue-300 bg-clip-text font-black leading-tight tracking-tight text-transparent text-4xl md:text-7xl"
                    >
                        Building Scalable Modern Web Experiences.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6 }}
                        className="mt-8 max-w-3xl md:text-lg leading-relaxed text-zinc-400"
                    >
                        Crafting performant, accessible, and cinematic digital
                        products using MongoDB, Express.js, React.js, and Node.js.
                        Turning complex ideas into elegant digital experiences.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.8 }}
                        className="mt-12 flex flex-col gap-5 sm:flex-row"
                    >
                        <button onClick={()=> navigate('/featured-project')} className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-4 font-semibold shadow-[0_0_40px_rgba(139,92,246,0.35)] transition hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(139,92,246,0.5)]">
                            View Projects
                        </button>

                        <button onClick={()=> navigate('/experience#contact')} className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10">
                            Contact Me
                        </button>
                    </motion.div>

                    {/* Floating Left Icons */}
                    <div className="absolute left-0 top-1/4 hidden flex-col gap-10 lg:flex">
                        {techBadgesLeft.map((item, index) => (
                            <motion.div
                                key={index}
                                {...floatingAnimation}
                                className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-white/5 text-violet-300 backdrop-blur-xl ${item.rotate}`}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating Right Icons */}
                    <div className="absolute right-0 top-1/3 hidden flex-col gap-10 lg:flex">
                        {techBadgesRight.map((item, index) => (
                            <motion.div
                                key={index}
                                {...floatingAnimation}
                                className={`flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-500/20 bg-white/5 text-cyan-300 backdrop-blur-xl ${item.rotate}`}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                        className="mt-24 flex flex-wrap items-center justify-center gap-6"
                    >
                        {[
                            {
                                icon: <FaReact />,
                                label: "React",
                            },
                            {
                                icon: <SiExpress />,
                                label: "Express",
                            },
                            {
                                icon: <FaNodeJs />,
                                label: "Node",
                            },
                            {
                                icon: <SiMongodb />,
                                label: "MongoDB",
                            },
                        ].map((tech) => (
                            <div
                                key={tech.label}
                                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-zinc-300 backdrop-blur-xl transition hover:scale-105 hover:border-violet-500/40"
                            >
                                <span className="text-2xl text-violet-300">
                                    {tech.icon}
                                </span>
                                <span>{tech.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                        }}
                        className="mt-24 flex flex-col items-center gap-4"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                            Discover More
                        </span>

                        <div className="flex h-10 w-6 justify-center rounded-full border border-white/10 p-1">
                            <div className="h-2 w-1 rounded-full bg-violet-300" />
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            {/* <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-16">
                    <h2 className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-2xl font-black text-transparent">
                        MERN Architect
                    </h2>

                    <p className="text-center text-zinc-500">
                        © 2026 Digital Craftsmanship. Built with MERN Stack.
                    </p>

                    <div className="flex items-center gap-6 text-2xl text-zinc-400">
                        <FaGithub className="cursor-pointer transition hover:text-violet-300" />
                        <FaLinkedin className="cursor-pointer transition hover:text-violet-300" />
                        <FaTwitter className="cursor-pointer transition hover:text-violet-300" />
                    </div>
                </div>
            </footer> */}
        </div>
    );
}
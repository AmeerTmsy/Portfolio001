// src/layout/MainLayout.jsx

import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import ScrollToHash from "../../hooks/ScrollToHash";

export default function MainLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            name: "Home",
            path: "/",
        },

        {
            name: "About",
            path: "/about",
        },

        {
            name: "Work",
            path: "/featured-project",
        },

        {
            name: "Experience",
            path: "/experience",
        },
    ];

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
            <ScrollToHash />
            {/* BACKGROUND GLOWS */}
            <div className="pointer-events-none absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

            <div className="pointer-events-none absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

            {/* ================= HEADER ================= */}
            <>
                {/* HEADER */}
                <header className="fixed left-1/2 top-5 z-50 w-[92%] max-w-7xl -translate-x-1/2">
                    {/* DESKTOP NAVBAR */}
                    <nav className="hidden items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl md:flex">
                        {/* LOGO */}
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-2xl font-black tracking-tight text-transparent"
                        >
                            MERN Developer
                        </motion.h1>

                        {/* NAVIGATION */}
                        <div className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition ${isActive
                                            ? "text-violet-300"
                                            : "text-zinc-300 hover:text-violet-300"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* CTA */}
                        <button className="rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-2 text-sm font-semibold transition hover:scale-95 active:scale-90">
                            Resume
                        </button>
                    </nav>

                    {/* MOBILE NAVBAR */}
                    <nav className="flex items-center justify-between rounded-[2rem] border border-white/10 bg-[#060b2a]/90 px-6 py-3 md:py-5 shadow-[0_0_40px_rgba(59,130,246,0.08)] backdrop-blur-2xl md:hidden">
                        {/* LOGO */}
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-xl md:text-3xl font-black tracking-tight text-transparent"
                        >
                            MERN Developer
                        </motion.h1>

                        {/* MENU BUTTON */}
                        <button
                            onClick={handleToggleMenu}
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition active:scale-90"
                        >
                            {isMenuOpen ? (
                                <IoCloseOutline className="h-7 w-7" />
                            ) : (
                                <HiOutlineMenuAlt3 className="h-7 w-7" />
                            )}
                        </button>
                    </nav>
                </header>

                {/* MOBILE MENU */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-40 bg-[#030617]/95 px-8 pb-10 pt-32 backdrop-blur-2xl md:hidden flex flex-col"
                        >
                            {/* BIG BACKGROUND NUMBER */}
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <h1 className="text-[18rem] font-black text-white/[0.02]">
                                    01
                                </h1>
                            </div>

                            {/* NAV ITEMS */}
                            <div className="relative z-10 flex flex-col gap-12 flex-1">
                                {navItems.map((item, index) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        onClick={handleCloseMenu}
                                        className="group flex items-center gap-5"
                                    >
                                        <span className="text-xl font-bold text-white/20">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-xl font-medium tracking-tight text-zinc-100 transition group-hover:text-violet-300">
                                            {item.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>

                            {/* RESUME BUTTON */}
                            <div className="relative z-10 mt-24">
                                <button className="w-full rounded-[2rem] bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-xl font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.35)] transition active:scale-95">
                                    Resume
                                </button>
                            </div>

                            {/* SOCIALS */}
                            <div className="relative z-10 mt-12 flex items-center justify-between text-xs md:text-sm uppercase tracking-[0.3em] text-zinc-500">
                                <a href="/">GitHub</a>
                                <a href="/">LinkedIn</a>
                                <a href="/">Twitter</a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>

            {/* ================= MAIN CONTENT ================= */}
            <main className="relative z-10 min-h-screen pt-20">
                <Outlet />
            </main>

            {/* ================= FOOTER ================= */}
            <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-16">
                    {/* LOGO */}
                    <h2 className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-2xl font-black text-transparent">
                        MERN Developer
                    </h2>

                    {/* COPYRIGHT */}
                    <p className="text-center text-zinc-500">
                        © 2026 Digital Craftsmanship. Built with MERN
                        Stack.
                    </p>

                    {/* SOCIALS */}
                    <div className="flex items-center gap-6 text-2xl text-zinc-400">
                        <FaGithub className="cursor-pointer transition hover:text-violet-300" />

                        <FaLinkedin className="cursor-pointer transition hover:text-violet-300" />

                        <FaTwitter className="cursor-pointer transition hover:text-violet-300" />
                    </div>
                </div>
            </footer>
        </div>
    );
}
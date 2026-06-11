import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";

import {
  HiOutlineExternalLink,
  HiOutlineCloud,
  HiOutlineShieldCheck,
} from "react-icons/hi";

import {
  LuDatabase,
  LuActivity,
  LuSparkles,
} from "react-icons/lu";

const techStack = [
  {
    icon: <FaReact />,
    title: "Frontend",
    description:
      "React with Redux Toolkit for complex state management and Tailwind CSS for rapid, token-based UI development.",
    color: "text-[#c9a7ff]",
    bg: "bg-[#161d3d]",
  },

  {
    icon: <FaNodeJs />,
    title: "Backend",
    description:
      "Node.js and Express.js powering a modular REST API with deep integration for third-party AI providers.",
    color: "text-[#2fe0ff]",
    bg: "bg-[#10283b]",
  },

  {
    icon: <LuDatabase />,
    title: "Database",
    description:
      "MongoDB Atlas with aggregation pipelines for real-time analytics and user behavior tracking.",
    color: "text-[#b8c7ff]",
    bg: "bg-[#161d3d]",
  },

  {
    icon: <HiOutlineCloud />,
    title: "DevOps",
    description:
      "AWS ECS Fargate for containerized scaling and GitHub Actions for CI/CD workflows.",
    color: "text-[#c9a7ff]",
    bg: "bg-[#241040]",
  },
];

const highlights = [
  {
    icon: <SiSocketdotio />,
    title: "Real-time Synchronization",
    description:
      "WebSocket integration via Socket.io ensures that inference results and model training progress are streamed instantly.",
    large: true,
    color: "text-[#c9a7ff]",
  },

  {
    icon: <HiOutlineShieldCheck />,
    title: "Multi-tenant Security",
    description:
      "JWT-based authentication with RBAC and automated secret rotation for provider API keys.",
    color: "text-[#2fe0ff]",
  },

  {
    icon: <LuActivity />,
    title: "Cost Analytics",
    description:
      "Visual breakdown of token usage and API costs across multiple LLM providers.",
    color: "text-[#b8c7ff]",
  },

  {
    icon: <LuSparkles />,
    title: "Automated Fine-tuning",
    description:
      "Simplified pipeline for uploading datasets and triggering model training on GPU clusters.",
    large: true,
    color: "text-[#ffd7f0]",
  },
];

const stats = [
  {
    value: "40%",
    label: "Faster Load Times",
    color: "text-[#c9a7ff]",
  },

  {
    value: "10k+",
    label: "Active Monthly Users",
    color: "text-[#2fe0ff]",
  },

  {
    value: "99.9%",
    label: "Uptime Reliability",
    color: "text-[#b8c7ff]",
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

export default function ProjectDetailsPage() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND */}
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* ================= HERO ================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-10">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-3 text-sm font-bold tracking-wide text-[#9ca3af]">
          <span>Work</span>

          <span>›</span>

          <span className="text-[#c9a7ff]">
            AI SaaS Dashboard
          </span>
        </div>

        <div className="grid items-end gap-16 lg:grid-cols-12">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-8"
          >
            <h1 className="bg-gradient-to-br from-white to-[#b892ff] bg-clip-text text-6xl font-black leading-[0.95] tracking-tight text-transparent md:text-8xl">
              AI SaaS Dashboard
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-[1.9] text-[#b3b3cc]">
              An enterprise-grade orchestration layer for
              generative AI workflows, enabling seamless
              management of LLM resources, automated fine-tuning
              pipelines, and real-time inference monitoring.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{
              delay: 0.2,
            }}
            className="flex flex-col gap-5 lg:col-span-4"
          >
            <button className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#8b5cf6] to-[#2563eb] px-8 py-5 text-lg font-bold transition hover:scale-[0.98]">
              <HiOutlineExternalLink className="text-2xl" />
              Live Preview
            </button>

            <button className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-bold transition hover:bg-white/10">
              <FaGithub className="text-2xl" />
              GitHub
            </button>
          </motion.div>
        </div>

        {/* INFO ROW */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-8 rounded-[32px] border border-white/10 bg-[#070f2a]/70 p-10 backdrop-blur-xl md:grid-cols-4"
        >
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#8b8ba7]">
              Role
            </p>

            <h3 className="text-3xl font-black text-[#c9a7ff]">
              Lead Architect
            </h3>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#8b8ba7]">
              Timeline
            </p>

            <h3 className="text-3xl font-black text-[#c9a7ff]">
              3 Months
            </h3>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#8b8ba7]">
              Tech Stack
            </p>

            <h3 className="text-3xl font-black text-[#c9a7ff]">
              MERN & AWS
            </h3>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#8b8ba7]">
              Category
            </p>

            <h3 className="text-3xl font-black text-[#c9a7ff]">
              DevOps / AI
            </h3>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[40px] border border-white/10 bg-[#070f2a]/70 p-2 backdrop-blur-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            alt="dashboard"
            className="aspect-[21/9] w-full rounded-[32px] object-cover opacity-80"
          />
        </motion.div>
      </div>

      {/* ================= CHALLENGE ================= */}
      <div className="mx-auto grid max-w-7xl items-center gap-24 px-6 py-10 md:px-10 lg:grid-cols-2">
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">
            The Challenge
          </h2>

          <div className="mt-10 space-y-8 text-[1.15rem] leading-[1.9] text-[#b3b3cc]">
            <p>
              Building a multi-tenant AI platform requires
              balancing extreme resource demands with
              low-latency responsiveness.
            </p>

            <p>
              The primary challenge was orchestrating
              long-running LLM tasks without blocking the UI
              thread or exceeding infrastructure budgets.
            </p>

            <p>
              We needed a system that could handle fluctuating
              inference loads while providing granular cost
              insights and real-time status updates.
            </p>
          </div>
        </motion.div>

        {/* CODE CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#070f2a]/70 p-10 backdrop-blur-xl"
        >
          <div className="absolute right-[-10%] top-[-10%] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative z-10">
            {/* DOTS */}
            <div className="mb-8 flex gap-3">
              <div className="h-4 w-4 rounded-full bg-red-300" />

              <div className="h-4 w-4 rounded-full bg-violet-300" />

              <div className="h-4 w-4 rounded-full bg-cyan-300" />
            </div>

            <pre className="overflow-x-auto text-[15px] leading-[2] text-[#2fe0ff]">
              <code>
                {`// Event-driven Orchestration
const processInference = async (req, res) => {
  const { prompt, model } = req.body;

  await redisQueue.publish("inference_job", {
    userId: req.user.id,
    timestamp: Date.now(),
    payload: { prompt, model }
  });

  return res.status(202).json({
    status: "queued"
  });
};`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      {/* ================= TECH STACK ================= */}
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-10">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Architecture & Tech Stack
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-[1.8] text-[#b3b3cc]">
            A robust engineering foundation designed for
            horizontal scalability and high availability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="rounded-[32px] border border-white/10 bg-[#070f2a]/70 p-10 backdrop-blur-xl"
            >
              <div
                className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl ${item.bg} text-4xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-4xl font-black tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-6 text-[1.05rem] leading-[1.9] text-[#b3b3cc]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= ENGINEERING HIGHLIGHTS ================= */}
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <h2 className="mb-20 text-center text-5xl font-black tracking-tight text-white md:text-7xl">
          Engineering Highlights
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className={`rounded-[32px] border border-white/10 bg-[#070f2a]/70 p-10 backdrop-blur-xl ${
                item.large ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`mb-8 text-5xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="text-4xl font-black tracking-tight text-white">
                {item.title}
              </h3>

              <p className="mt-6 text-[1.05rem] leading-[1.9] text-[#b3b3cc]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= RESULTS ================= */}
      <div className="mx-auto max-w-7xl px-6 py-32 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden rounded-[48px] border border-white/10 bg-[#121629] p-14 text-center backdrop-blur-xl"
        >
          <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            Tangible Outcomes
          </h2>

          {/* STATS */}
          <div className="mt-20 grid gap-16 md:grid-cols-3">
            {stats.map((item, index) => (
              <div key={index}>
                <h3
                  className={`text-7xl font-black ${item.color}`}
                >
                  {item.value}
                </h3>

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-[#8b8ba7]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* QUOTE */}
          <p className="mx-auto mt-20 max-w-4xl text-2xl italic leading-[1.9] text-[#c8c8d9]">
            "The AI SaaS Dashboard has redefined how our
            engineering team manages model deployment. It
            effectively bridged the gap between our data
            scientists and product managers."
          </p>
        </motion.div>
      </div>

      {/* ================= NEXT PROJECT ================= */}
      <div className="mx-auto max-w-7xl px-6 pb-32 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[48px] border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            alt="next project"
            className="h-[500px] w-full object-cover opacity-40 transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent text-center">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#b3b3cc]">
              Up Next
            </p>

            <h2 className="text-6xl font-black tracking-tight text-white transition group-hover:text-[#c9a7ff] md:text-8xl">
              MERN Job Board
            </h2>

            <FaArrowRight className="mt-10 rotate-90 text-5xl text-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
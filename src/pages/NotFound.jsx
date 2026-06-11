import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="mt-4 text-zinc-400">
        Page not found
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-xl bg-violet-600"
      >
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;
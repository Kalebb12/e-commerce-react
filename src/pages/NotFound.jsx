import { Link } from "react-router";

const NotFound = () => {
  return (
    <main
      className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-6 py-12"
      role="main"
      aria-labelledby="notfound-heading"
    >
      <div className="max-w-3xl w-full text-center">
        {/* Illustration */}
        <div className="mx-auto w-40 h-40 rounded-full bg-white/60 flex items-center justify-center shadow-md">
          <svg
            className="w-20 h-20 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9.75 9.75L14.25 14.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1
          id="notfound-heading"
          className="mt-6 text-3xl sm:text-4xl font-extrabold text-gray-900"
        >
          Page not found
        </h1>

        <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
          We couldn’t find the page you’re looking for. It may have been moved or
          removed. Try returning home or browse our latest products.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-black text-white font-medium shadow hover:opacity-95 transition"
            aria-label="Go to homepage"
          >
            Go to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-200 bg-white text-gray-800 font-medium hover:bg-gray-50 transition"
            aria-label="Go back"
          >
            Go Back
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          If you think something's broken, <a className="underline" href="mailto:support@example.com">contact support</a>.
        </p>
      </div>
    </main>
  );
};

export default NotFound;
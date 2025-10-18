import { Link } from "react-router";

const Banner = () => {
  return (
    <section
      className="relative bg-[url('/banner.jpg')] bg-center bg-cover min-h-[60vh] flex items-center"
      role="region"
      aria-label="Promotional banner"
    >
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      {/* content */}
      <div className="container mx-auto relative z-10 px-4 py-20 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Discover unique finds for every room
        </h1>

        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto opacity-90">
          Hand-picked styles and great prices — free shipping on orders over $75.
        </p>

        <Link
          to="/catalogue"
          className="inline-block mt-6 bg-white text-black font-semibold py-3 px-6 rounded-md shadow hover:shadow-lg transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
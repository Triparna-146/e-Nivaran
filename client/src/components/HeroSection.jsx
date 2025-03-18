import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-l from-blue-500 to-blue-700 text-white py-16 px-6 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold">Your Voice Matters</h1>
          <p className="mt-4 text-lg">
            A transparent and efficient platform to register and track your complaints. We are committed to resolving your issues promptly.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              className="w-full sm:w-auto bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200"
              onClick={() => navigate("/register-complaint")}
            >
              Register Complaint →
            </button>
            <button
              className="w-full sm:w-auto border border-white text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              onClick={() => navigate("/track-complaint")}
            >
              Track Complaint
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="w-40 h-40 sm:w-60 sm:h-60 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}

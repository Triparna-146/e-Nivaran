export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">How It Works</h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          A simple 3-step process to register, track, and resolve your complaint efficiently.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          
          {/* Step 1 - Register Complaint */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg transition hover:shadow-2xl">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold text-lg mt-4 text-gray-800">Register Complaint</h3>
            <p className="text-sm text-gray-600 mt-2">
              Submit your complaint through any of our available channels. Receive a unique tracking ID.
            </p>
          </div>

          {/* Step 2 - Track Progress */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg transition hover:shadow-2xl">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold text-lg mt-4 text-gray-800">Track Progress</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get real-time updates on your complaint status via SMS, Email, or WhatsApp notifications.
            </p>
          </div>

          {/* Step 3 - Resolution */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg transition hover:shadow-2xl">
            <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-lg mt-4 text-gray-800">Resolution</h3>
            <p className="text-sm text-gray-600 mt-2">
              Receive resolution details and provide feedback. Reopen if not satisfied with the resolution.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

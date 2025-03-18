import React from 'react';
import { FaWhatsapp, FaQrcode, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const ComplainingMethods = () => {
  return (
    <section className="py-16 text-center bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800">Multiple Ways to Register Your Complaint</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Choose the most convenient method to register your complaint and get it addressed quickly.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
          
          {/* Web Portal */}
          <div className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <FaGlobe className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-gray-800">Web Portal</h3>
            <p className="text-sm text-gray-600 mt-2">
              Register your complaint online through our web portal with easy-to-fill forms.
            </p>
            <a href="#" className="text-blue-600 font-semibold mt-3 inline-block hover:underline">
              Register Now →
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <FaWhatsapp className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-gray-800">WhatsApp</h3>
            <p className="text-sm text-gray-600 mt-2">
              Send your complaint via WhatsApp to our chatbot for instant registration.
            </p>
            <a href="#" className="text-green-600 font-semibold mt-3 inline-block hover:underline">
              Start Chat →
            </a>
          </div>

          {/* QR Code */}
          <div className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <FaQrcode className="text-purple-500 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-gray-800">QR Code</h3>
            <p className="text-sm text-gray-600 mt-2">
              Scan QR codes placed at government offices to register complaints on the spot.
            </p>
            <a href="#" className="text-purple-600 font-semibold mt-3 inline-block hover:underline">
              Learn More →
            </a>
          </div>

          {/* Helpdesk */}
          <div className="bg-white border p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <FaPhoneAlt className="text-orange-500 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-gray-800">Helpdesk</h3>
            <p className="text-sm text-gray-600 mt-2">
              Visit any government office helpdesk to register your complaint in person.
            </p>
            <a href="#" className="text-orange-600 font-semibold mt-3 inline-block hover:underline">
              Find Locations →
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ComplainingMethods;

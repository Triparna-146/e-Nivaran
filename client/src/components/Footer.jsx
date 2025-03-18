import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="font-bold text-lg mb-2">About</h2>
            <p className="text-sm">
              The Comprehensive Complaint Redressal System is an initiative by the
              Collector Office, Anand, Gujarat to improve citizen satisfaction and governance.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="font-bold text-lg mb-2">Quick Links</h2>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline">Register Complaint</a></li>
              <li><a href="#" className="hover:underline">Track Complaint</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="font-bold text-lg mb-2">Contact</h2>
            <p className="text-sm">Collector Office</p>
            <p className="text-sm">Anand, Gujarat</p>
            <p className="text-sm">India</p>
            <p className="text-sm text-blue-500 hover:underline">
              dymc1-amc-and@gujarat.gov.in
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="font-bold text-lg mb-2">Connect</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-gray-500">
          &copy; 2025 Collector Office, Anand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

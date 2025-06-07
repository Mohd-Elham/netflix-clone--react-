import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-64 pb-8 pt-16">
        {/* Social Media Icons */}
        <div className="flex gap-4 sm:gap-6 mb-8 justify-center sm:justify-start">
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl sm:text-3xl lg:text-4xl" />
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaXTwitter className="text-2xl sm:text-3xl lg:text-4xl" />
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="YouTube"
          >
            <FaYoutube className="text-2xl sm:text-3xl lg:text-4xl" />
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl sm:text-3xl lg:text-4xl" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          <ul className="flex flex-col gap-y-3">
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Audio Description
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Help Centre
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Gift Cards
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-y-3">
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Media Centre
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Investor Relations
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Jobs
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-y-3">
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Legal Notices
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-y-3">
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Cookie Preferences
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Corporate Information
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>


        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
          © 1997-2024 Netflix, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import { FaFacebook, FaInstagram , FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="text-xs bg-black text-gray-300 px-64 pb-8">
        <div className="text-white flex gap-4 mb-4">
          <FaInstagram  className="text-4xl"/>
          <FaXTwitter  className="text-4xl"/>
          <FaYoutube  className="text-4xl"/>
          <FaFacebook  className="text-4xl"/>
        </div>
        <div className="text-xs text-left grid grid-cols-4 bg-black text-gray-300 pb-4">
          <ul className="list-none flex flex-col gap-y-3">
            <li>Audio Description</li>
            <li>Help Centre</li>
            <li>Gift Cards</li>
          </ul>
          <ul className="list-none flex flex-col gap-y-3">
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
          </ul>
          <ul className="list-none flex flex-col gap-y-3">
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
          </ul>
          <ul className="list-none flex flex-col gap-y-3">
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <p className="bg-black text-xs text-gray-500 py-4">
          © 1997-2023 Netflix, Inc.
        </p>
      </div>
    </>
  );
};

export default Footer;

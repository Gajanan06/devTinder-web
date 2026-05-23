import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-10 fixed bottom-0 w-full">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} devTinder. All rights reserved.
          </p>
        </div>

    
        <div className="flex items-center gap-5 text-xl">
          <a
            href="#"
            className="hover:text-white transition duration-200"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className="hover:text-white transition duration-200"
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="hover:text-white transition duration-200"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
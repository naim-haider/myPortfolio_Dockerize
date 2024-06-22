import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <h1 className="font-semibold text-white text-3xl">NH</h1>
      </div>
      <div className="mr-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/naim-haider-6825ba248/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/naim-haider">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/naim.haider.142/">
          <FaInstagram />
        </a>
        <a href="https://x.com/Naim23778831">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

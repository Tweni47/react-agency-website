import Section from "../container/Section";
import footerLogo from "../assets/footerLogo.svg";
import instagram from "../assets/instagram.svg";
import tumblr from "../assets/tumblr.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <>
      <Section />
      <div className="flex flex-col lg:flex-row items-center bg-[#263238] md:px-[100px] px-[50px] py-[80px] text-gray-300">
        <div className="flex flex-col lg:flex-1">
          <img src={footerLogo} width={191} alt="Nexcent Footer Logo" />
          <div className="my-10">
            <p className="mb-2">Copyright &copy; 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex space-x-4">
            <img src={instagram} alt="Instagram Icon" />
            <img src={tumblr} alt="Tumblr Icon" />
            <img src={twitter} alt="Twitter Icon" />
            <img src={youtube} alt="Youtube Icon" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-20 lg:space-y-0 space-y-10 lg:mt-0 mt-10">
          <div className="flex flex-col">
            <h1 className="font-bold">Company</h1>
            <div className="flex flex-col mt-4 space-y-2">
              <p>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Support</h1>
            <div className="flex flex-col mt-4 space-y-2">
              <p>Help Center</p>
              <p>Terms of Service</p>
              <p>Legal</p>
              <p>Privacy Policy</p>
              <p>Status</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Stay up to date</h1>
            <input
              type="search"
              placeholder="Your email address"
              className="rounded bg-gray-600 px-4 py-2 mt-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-[60px] dark:bg-[#181A2A] dark:text-white">
      <div className="max-container">
        <div className="flex flex-col gap-y-[50px] md:grid md:grid-cols-2 md:gap-[50px] xl:flex xl:flex-row xl:justify-between">
          <div className="flex flex-col">
            <h2 className="text-[25px] font-medium text-black dark:text-white mb-[30px]">
              DevFolio
            </h2>
            <p className="text-gray-500 text-[16px] font-normal max-w-[400px] mb-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              provident sint quisquam maiores voluptatum qui eius doloremque ut
              assumenda praesentium.
            </p>
            <div className="flex items-center gap-[20px] md:mt-auto">
              <FaInstagram className="w-[25px] h-[25px] scale-110" />
              <FaFacebookF className="w-[25px] h-[25px]" />
              <FaXTwitter className="w-[25px] h-[25px]" />
              <FaYoutube className="w-[25px] h-[25px]" />
            </div>
          </div>
          <div className="flex flex-col gap-y-[30px] md:flex-row md:gap-x-[100px]">
            <ul className="flex flex-col gap-[18px]">
              <li className="text-[20px] text-gray-800 font-bold dark:text-white">
                Quick Links
              </li>
              <li className="footer-list-item">
                <Link href="/">Home</Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">About</Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">Blog</Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">Archived</Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">Author</Link>
              </li>
              <li className="footer-list-item">
                <Link href="#">Contact</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-[18px]">
              <li className="text-[20px] text-gray-800 font-bold dark:text-white">
                Category
              </li>
              <li className="footer-list-item">Lifestyle</li>
              <li className="footer-list-item">Technology</li>
              <li className="footer-list-item">Travel</li>
              <li className="footer-list-item">Business</li>
              <li className="footer-list-item">Economy</li>
              <li className="footer-list-item">Sports</li>
            </ul>
          </div>
          <div className="md:col-span-2 xl:w-[350px] flex justify-center">
            <div className="bg-white pt-[30px] h-[250px] w-full rounded-md flex flex-col items-center md:w-[500px] lg:[350px]">
              <h2 className="text-[20px]  font-semibold mb-[15px] dark:text-gray-600">
                Weekly Newsletter
              </h2>
              <p className="text-gray-400 text-[16px] mb-[20px]">
                Get blog articles offers via email
              </p>
              <form>
                <div className="flex justify-between items-center border-[1px] border-gray-300/50 rounded-md px-[8px] py-[10px] mb-[15px]">
                  <input
                    className="px-[8px] outline-none"
                    type="text"
                    placeholder="Your Email"
                  />
                  <FaRegEnvelope className="dark:text-black" />
                </div>
                <Button className="w-full bg-blue-700 hover:bg-blue-500 dark:text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

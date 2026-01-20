import Image from "next/image";
import userImage from "@/images/pic.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Card from "@/ui_components/Card";
import BlogCards from "@/ui_components/BlogCards";

const ProfilePage = () => {
  return (
    <section className="dark:bg-[#181A2A] dark:text-white">
      <div className="max-container">
        <div className="flex flex-col items-center gap-y-[30px] pb-[60px] pt-[60px]">
          <div className="flex items-center gap-[20px]">
            <Image
              src={userImage}
              alt="user-image"
              width={80}
              height={80}
              className="object-cover rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-[25px] text-gray-400 font-medium">
                Sara Conor
              </span>
              <span className="text-[20px] text-gray-500 font-medium">
                Fulstack Developper
              </span>
            </div>
          </div>
          <p className="text-[18px] text-center max-w-[800px]  text-gray-600/50 font-medium leading-8 dark:text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quidem
            ipsa excepturi voluptatem eos architecto libero voluptate, sit
            suscipit vero ad optio ex. Sit, nostrum adipisci distinctio
            molestias quidem a et magni itaque. Quisquam quidem optio illo,
            accusamus doloremque minima veritatis voluptatibus, qui quasi
            deserunt doloribus rem quam, perspiciatis nostrum. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Ab quidem ipsa
            excepturi voluptatem eos architecto libero voluptate, sit suscipit
            vero ad optio ex. Sit, nostrum adipisci distinctio molestias quidem
            a et magni itaque. Quisquam quidem optio illo, accusamus doloremque
            minima veritatis voluptatibus, qui quasi deserunt doloribus rem
            quam, perspiciatis nostrum.
          </p>
          <div className="flex items-center gap-[20px] md:mt-auto">
            <div className="bg-gray-400 rounded-[10px] p-[10px] text-white hover:scale-110  duration-200">
              <FaInstagram className="w-[25px] h-[25px]" />
            </div>
            <div className="bg-gray-400 rounded-[10px] p-[10px] text-white hover:scale-110  duration-200">
              <FaFacebookF className="w-[25px] h-[25px]" />
            </div>
            <div className="bg-gray-400 rounded-[10px] p-[10px] text-white hover:scale-110  duration-200">
              <FaXTwitter className="w-[25px] h-[25px]" />
            </div>
            <div className="bg-gray-400 rounded-[10px] p-[10px] text-white hover:scale-110  duration-200">
              <FaYoutube className="w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[60px] bg-blue-950 w-full dark:bg-[#181A2A] dark:text-white">
        <BlogCards>
          <Card />
        </BlogCards>
      </div>
    </section>
  );
};

export default ProfilePage;

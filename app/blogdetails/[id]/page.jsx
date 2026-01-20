import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import profilePage from "@/images/pic.jpg";
import blogBanner from "@/images/detailBanner.jpg";

const BlogDetails = () => {
  return (
    <section className="dark:bg-[#181A2A] dark:text-white">
      <div className="max-container py-[60px] flex flex-col max-w-[1100px] mx-auto">
        <Button className="bg-blue-600 font-semibold self-start mb-[20px] dark:text-white">
          FullStack
        </Button>
        <h1 className="text-[30px] md:text-[40px] font-semibold mb-[30px]">
          Build a Shopping Cart with Typescript, React and Supabase
        </h1>
        <Link
          href="/profilepage/id"
          className="flex items-center gap-[20px] mb-[30px]"
        >
          <Image
            src={profilePage}
            width={50}
            height={50}
            className="object-cover rounded-full"
            alt="profile-image"
          />
          <span className="text-gray-600/50 text-[18px] dark:text-gray-400">
            Sara Conor
          </span>
          <span className="text-gray-600/50 text-[18px] dark:text-gray-400">
            15 desember 2025
          </span>
        </Link>
        <div className="w-full mb-[40px]">
          <div className="relative w-full h-[500px] mx-auto">
            <Image
              src={blogBanner}
              alt="blog-banner"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <p className="text-[18px] text-gray-600/50 font-medium mx-auto leading-8 dark:text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quidem
          ipsa excepturi voluptatem eos architecto libero voluptate, sit
          suscipit vero ad optio ex. Sit, nostrum adipisci distinctio molestias
          quidem a et magni itaque. Quisquam quidem optio illo, accusamus
          doloremque minima veritatis voluptatibus, qui quasi deserunt doloribus
          rem quam, perspiciatis nostrum. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Ab quidem ipsa excepturi voluptatem eos
          architecto libero voluptate, sit suscipit vero ad optio ex. Sit,
          nostrum adipisci distinctio molestias quidem a et magni itaque.
          Quisquam quidem optio illo, accusamus doloremque minima veritatis
          voluptatibus, qui quasi deserunt doloribus rem quam, perspiciatis
          nostrum.
        </p>
      </div>
    </section>
  );
};

export default BlogDetails;

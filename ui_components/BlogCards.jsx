import Image from "next/image";
import Card from "./Card";
import burger from "@/images/burger.png";

const BlogCards = () => {
  return (
    <section className="py-[50px] dark:bg-[#181A2A] dark:text-white">
      <div className="flex justify-center items-center gap-2 mb-[30px]">
        <Image
          className="w-[20px] h-[20px] object-cover block"
          src={burger}
          alt="burger-icon"
          width={20}
          height={20}
        />
        <h2 className="text-[30px] font-semibold">Latest Posts</h2>
      </div>

      <div className="max-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[370_370_370] gap-[30px] justify-center">
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default BlogCards;

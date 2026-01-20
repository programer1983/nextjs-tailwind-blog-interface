import Image from "next/image";
import cardImage from "@/images/design_vii.jpg";
import { Button } from "@/components/ui/button";
import userImage from "@/images/pic.jpg";
import Link from "next/link";

const Card = () => {
  return (
    <Link href={"/blogdetails/id"}>
      <div className="flex flex-col items-center border-[2px] p-[20px] border-solid border-white rounded-lg dark:border-gray-600 shadow-md">
        <div className="relative w-full h-[300px] mb-[15px]">
          <Image
            className="object-cover w-full h-full rounded-lg"
            src={cardImage}
            alt="card-image"
          />
        </div>

        <Button className="bg-blue-700 self-start font-semibold mb-[20px] hover:bg-blue-500 dark:text-white">
          Frontend
        </Button>
        <p className="block self-start text-[18px] font-medium text-black dark:text-white mb-[20px]">
          Build a Content Management Sysytem with Typescript and React.
        </p>
        <div className="flex items-center gap-[20px] w-full">
          <Image
            className="object-cover w-[40px] h-[40px] rounded-[50%]"
            src={userImage}
            alt="user-image"
          />
          <span className="block text-[16px] text-gray-500">Sara Conor</span>
          <span className="block text-[16px] text-gray-500">
            13 November 2025
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;

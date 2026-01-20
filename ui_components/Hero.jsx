import heroImage from "@/images/tech-girl.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-containe">
      <div className="relative  w-full h-[470px] overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src={heroImage}
          alt="hero-image"
          fill
        />
      </div>
    </section>
  );
};

export default Hero;

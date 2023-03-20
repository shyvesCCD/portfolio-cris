import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

interface CardProps {
  image: any;
  text: string;
}

const Card = ({ image, text }: CardProps) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const router = useRouter();

  return (
    <button
      className="mx-20 transition-all hover:brightness-90 hover:font-bold flex justify-center items-center flex-col text-zinc-100 hover:text-black"
      onClick={() =>
        router.push(`/projects/${text.toLowerCase().replace(/ /g, "")}`)
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <>
          <Image
            alt=""
            src={`https://cris-backend-production.up.railway.app${image}`}
            width={180}
            height={350}
          />
          <p className="lg:text-2xl text-xl capitalize">{text}</p>
        </>
      ) : (
        <>
          <Image
            className=""
            alt=""
            src={`https://cris-backend-production.up.railway.app${image}`}
            width={180}
            height={350}
          />
          <p className="lg:text-2xl text-xl capitalize">{text}</p>
        </>
      )}
    </button>
  );
};

export default Card;

import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

interface CardProps {
  image: any;
  text: string;
}

const Card = ({ image, text }: CardProps) => {
  const { theme } = useTheme();
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  const router = useRouter();

  return (
    <button
      className="mx-20 transition-all hover:brightness-90 hover:font-bold hover:text-4xl flex justify-center items-center flex-col"
      onClick={() =>
        router.push(`/projects/${text.toLowerCase().replace(/ /g, "")}`)
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <>
          {theme == "light" ? (
            <Image
              alt=""
              src={`https://cris-backend-production.up.railway.app${image}`}
              width={180}
              height={350}
            />
          ) : (
            <Image
              className="invert"
              alt=""
              src={`https://cris-backend-production.up.railway.app${image}`}
              width={180}
              height={350}
            />
          )}
          <p className="lg:text-2xl text-xl capitalize">{text}</p>
        </>
      ) : (
        <>
          {theme == "light" ? (
            <Image
              alt=""
              src={`https://cris-backend-production.up.railway.app${image}`}
              width={180}
              height={350}
            />
          ) : (
            <Image
              className="invert"
              alt=""
              src={`https://cris-backend-production.up.railway.app${image}`}
              width={180}
              height={350}
            />
          )}
          <p className="lg:text-2xl text-xl capitalize">{text}</p>
        </>
      )}
    </button>
  );
};

export default Card;

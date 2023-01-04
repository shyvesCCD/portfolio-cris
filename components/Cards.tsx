import { useRouter } from "next/router";

interface CardProps {
  text: string;
}

const Card = ({ text }: CardProps) => {
  const router = useRouter();

  return (
    <button
      className="w-full max-h-56 mx-3 sm:w-1/4 md:w-1/3 text-center border-2 border-gray-400 rounded-sm hover:brightness-75"
      onClick={() =>
        router.push(`/projects/${text.toLowerCase().replace(/ /g, "")}`)
      }
    >
      <p className="font-semibold lg:text-2xl md:text-xl sm:text-sm">{text}</p>
    </button>
  );
};

export default Card;

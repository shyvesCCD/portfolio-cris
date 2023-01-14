import { useRouter } from "next/router";

interface CardProps {
  text: string;
}

const Card = ({ text }: CardProps) => {
  const router = useRouter();

  return (
    <button
      className="lg:w-3/12 lg:h-48 lg:mt-0 mt-7 w-2/3 h-36 mx-9 text-center border-2 border-gray-400 rounded-sm hover:brightness-75"
      onClick={() =>
        router.push(`/projects/${text.toLowerCase().replace(/ /g, "")}`)
      }
    >
      <p className="lg:text-2xl text-xl capitalize">{text}</p>
    </button>
  );
};

export default Card;

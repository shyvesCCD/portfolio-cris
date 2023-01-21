import { useRouter } from "next/router";
import { FiMail } from "react-icons/fi";

const WaterMark = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/services")}
      className="bg-zinc-900 hover:w-16 hover:h-16 transition-all w-14 h-14 rounded-md absolute bottom-3 right-3 flex items-center justify-center cursor-pointer"
    >
      <FiMail className="fill-zinc-800 w-7 h-7" />
    </div>
  );
};

export default WaterMark;

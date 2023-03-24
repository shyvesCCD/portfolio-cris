import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/router";
import BOTTLE from "../public/BOTTLE.svg";

const WaterMark = () => {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <>
      {theme == "light" ? (
        <div
          onClick={() => router.push("/services")}
          className="hover:w-16 hover:h-16 transition-all w-14 h-14 absolute bottom-3 right-3 flex items-center justify-center cursor-pointer mx-8 p-2 bg-white rounded-lg shadow-lg"
        >
          <Image
            className="lg:visible invisible fill-zinc-400"
            src={BOTTLE}
            alt="Bottle for email"
            objectFit="contain"
          />
        </div>
      ) : (
        <div
          onClick={() => router.push("/services")}
          className="hover:w-16 hover:h-16 transition-all w-14 h-14 absolute bottom-3 right-3 flex items-center justify-center cursor-pointer mx-8 p-2 rounded-lg shadow-lg bg-zinc-800"
        >
          <Image
            className="lg:visible invisible invert"
            src={BOTTLE}
            alt="Bottle for email"
            objectFit="contain"
          />
        </div>
      )}
    </>
  );
};

export default WaterMark;

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme == "light" ? (
        <button onClick={() => setTheme("dark")}>
          <FiMoon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <FiSun />
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import HeadComponent from "../components/HeadComponent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <HeadComponent text="Cris Aldreyn" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

import Head from "next/head";

interface HeadProps {
  text: string;
}

export default function HeadComponent({ text }: HeadProps) {
  return (
    <Head>
      <title>{text}</title>
    </Head>
  );
}

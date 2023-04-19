import Head from "next/head";
import Header from "./Header";
import Hero from "./Hero"

export default function Home() {
  return (
    <>
      <Head>
        <title>Master Plizza</title>
      </Head>

      <Header />      
      <Hero />
      
      <footer></footer>
    </>
  );
}

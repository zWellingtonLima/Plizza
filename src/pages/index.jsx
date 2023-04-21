import Head from "next/head";
import Header from "./Header";
import Hero from "./Hero";
import WhyUs from "./WhyUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Master Plizza</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <WhyUs />
      </main>

      <footer></footer>
    </>
  );
}

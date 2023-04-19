import { calisto } from "./Header";
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div className="flex flex-col justify-center">
        <h1 className={`${calisto.className} leading-tight text-6xl`}>
        Satisfy Your Cravings with Our <span className="text-orange-500">Freshly Made</span> Pizzas  </h1>
        <p className={`${calisto.className} font-normal text-gray-500 text-xl mt-6`}>Say Goodbye to Boring Pizza and Hello to a Flavorful Adventure with Our Handcrafted, Freshly Made Pizzas.</p>
        <button className={`${calisto.className} text-2xl mt-12 py-4 px-12 bg-gradient-to-b from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 rounded-xl self-start text-orange-950 hover:text-orange-800 `}>Order Now</button>
      </div>

      <div className="px-16">
        <Image
          src="/pizzaHero.png"
          width={800}
          height={800}
          alt="Pizza background"
        />
      </div>
    </section>
  );
}

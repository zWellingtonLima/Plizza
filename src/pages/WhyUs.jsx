import { calisto } from "./Header";
import Image from 'next/image'

export default function WhyUs() {
  return (
    <section className="pt-28 h-96 mb-20 bg-white rounded-b-full shadow-sm">
      <div className="p-6 rounded-lg text-center">
        <h2 className={`${calisto.className} text-5xl text-gray-800`}>Why choose us?</h2>
        
        <article className="mt-10 flex justify-center gap-10">
          <div className="mt-10 bg-white p-4 rounded-b-lg grid shadow-lg space-y-4">
            <Image src="/entregador.png" width={350} height={350} alt="Ilustração de entregador"/>
            <h3 className={`${calisto.className} text-3xl`}>Fast Delivery</h3>
            <p className="text-lg text-gray-600">Just order and enjoy.</p>
          </div>

          <div className="bg-white p-4 rounded-b-lg grid shadow-lg space-y-4">
            <Image src="/entregador.png" width={350} height={350} alt="Ilustração de entregador"/>
            <h3 className={`${calisto.className} text-3xl`}>Fast Delivery</h3>
            <p className="text-lg text-gray-600">Just order and enjoy.</p>
          </div>

          <div className="bg-white p-4 rounded-b-lg grid shadow-lg space-y-4">
            <Image src="/entregador.png" width={350} height={350} alt="Ilustração de entregador"/>
            <h3 className={`${calisto.className} text-3xl`}>Fast Delivery</h3>
            <p className="text-lg text-gray-600">Just order and enjoy.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

import Image from "next/image";

import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineDeliveryDining } from "react-icons/md";

import { DynaPuff, Calistoga } from "next/font/google";

export const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400"],
});

export const calisto = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  return (
    <header className="container mx-auto border-b-2 border-orange-200">
      <nav className="flex px-3">
        <div className="flex flex-initial">
          <a
            href="#"
            className={`${dynaPuff.className} text-xl text-orange-500 flex items-center`}
          >
            <Image
              src="/pizza.png"
              alt="Master Plizza logo"
              width={70}
              height={10}
            />
            <span>Master Plizza</span>
          </a>
        </div>

        <div
          className={`${calisto.className} flex flex-1 justify-center items-center content-center text-lg`}
        >
          <a className="p-3 hover:text-orange-600 transition-colors" href="#">
            Why choose us?
          </a>
          <a className="p-3 hover:text-orange-600 transition-colors" href="#">
            Our Plizzas
          </a>
          <a className="p-3 hover:text-orange-600 transition-colors" href="#">
            Contact
          </a>
        </div>

        <div
          className={`${calisto.className} flex flex-initial justify-end items-center space-x- text-lg gap-2`}
        >
          <FiPhoneCall className="w-6 h-6" />
          <span>(+351) 987-654-321</span>
          <a href="#">
            <MdOutlineDeliveryDining className="w-10 h-10 text-orange-500 mx-2" />
          </a>
          <a
            href="#"
            className="text-white flex bg-gradient-to-b from-orange-500 to-yellow-500 rounded-lg p-2 gap-2 hover:from-orange-400 hover:to-yellow-400"
          >
            <button className="flex gap-2">
              <AiOutlineUser className="w-6 h-6" />
              Sign in
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}

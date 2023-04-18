import Image from "next/image";

import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineDeliveryDining } from "react-icons/md";

import { DynaPuff, Ubuntu } from "next/font/google";

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Header() {
  return (
    <header className="container mx-auto max-w-7xl border-b-2 border-orange-200">
      <nav className="flex px-3">
        <div className="flex flex-initial">
          <a href="#" className={`${dynaPuff.className} text-2xl text-orange-500 flex items-center`}>
            <Image
              src="/favicon.ico"
              width={90}
              height={50}
              alt="Master Plizza logo"
              />
              <span>Master Plizza</span>
          </a>
        </div>

        <div className={` ${ubuntu.className} flex flex-1 justify-center items-center content-center space-x-1 text-gray-500 text-xl `}>
          <a className="p-2 hover:text-orange-400" href="#">Why choose us?</a>
          <a className="p-2 hover:text-orange-400" href="#">Contact</a>
          <a className="p-2 hover:text-orange-400" href="#">Our Plizzas</a>
        </div>

        <div className="flex flex-initial justify-end items-center space-x-1 text-lg">
          <FiPhoneCall className="text-orange-500 w-6 h-6"/>
          <span className="font-bold">(+351) 987-654-321</span>
          <a href="#">
            <MdOutlineDeliveryDining className="w-10 h-10 m-2 text-orange-500 mx-5" />
          </a>
          <a href="#" className="flex border-4 border-orange-500  rounded-lg py-1 px-2 gap-2">
            <AiOutlineUser className="w-6 h-6"/>
            <button>Sign in</button>
          </a>
        </div>
      </nav>
    </header>
  );
}

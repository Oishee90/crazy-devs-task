
import Image from "next/image";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Promo from "./Component/Promo";
import Platform from "./Component/Platform";
import Pricing from "./Component/Pricing";
import ChoosePostiz from "./Component/ChoosePostiz";
import Faq from "./Component/Faq";

export default function Home() {
  return (
   <div className="bg-black text-white h-[100%]" >
    <div className="container mx-auto">
    <Navbar></Navbar>
    <Banner></Banner>
    <Promo></Promo>
    <Platform></Platform>
    <Pricing></Pricing>
    <ChoosePostiz></ChoosePostiz>
    <Faq></Faq>
    </div>

   </div>
  );
}

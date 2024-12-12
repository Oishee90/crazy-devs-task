
import Image from "next/image";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";

export default function Home() {
  return (
   <div  >
    <div className="container mx-auto">
    <Navbar></Navbar>
    <Banner></Banner>
    </div>

   </div>
  );
}

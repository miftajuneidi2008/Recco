import About from "@/components/about/About";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/home/Hero";
import Menu from "@/components/menu/Menu";
import Reserve from "@/components/reserve/Reserve";
import CustomerReviews from "@/components/review/CustomerReviews";
import Image from "next/image";

export default function Home() {
  return (
  <main className=" pt-[100px] relative">
   <section id="home" className="py-6">
    <Hero/>
   </section>
   <section id="about" className="md:py-[60px]">
    <About/>
   </section>
   <section id="menu" className="bg-[#e2e8f0]">
    <Menu/>
   </section>
   <section id="reserve" className="bg-pattern bg-cover bg-center bg-no-repeat  ">
    <Reserve />
   </section>
   <section id="gallery">
    <Gallery />
   </section>
   <section id="review" className="bg-[#eef2ff]">
    <CustomerReviews />
   </section>

  </main>
  );
}

import Header from "./components/header";
import CarouselSection from "./components/carousel";
import Hero from "./components/hero";
// import SectionTwo from "./components/sectionTwo";
import Community from "./components/community";
import Footer from "./components/footer";

export default function Home(){
  return(
    <>
    <div className="overflow-hidden">
      <div className="sticky z-100">
      <Header/>
      </div>
      <div className="lg:py-10 flex flex-col gap-10 lg:gap-5">
      <Hero/>
      <CarouselSection/>
      {/* <SectionTwo/> */}
      <Community/>
      <Footer/>
      </div>
      </div>
    </>
  )
}
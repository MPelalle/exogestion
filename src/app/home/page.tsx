import EightSection from "../components/home/sections/EightSection"
import FifthSection from "../components/home/sections/FifthSection"
import FirstSection from "../components/home/sections/FirstSection"
import FourthSection from "../components/home/sections/FourthSection"
import NinenthSection from "../components/home/sections/NinenthSection"
import SecondSection from "../components/home/sections/SecondSection"
import SeventhSection from "../components/home/sections/SeventhSection"
import SixthSection from "../components/home/sections/SixthSection"
import TenSection from "../components/home/sections/TenSection"
import ThirdSection from "../components/home/sections/ThirdSection"
import ImageCenter from "../components/microcomponents/ImageCenter"
import Mision from "../components/microcomponents/Mision"
import Services from "../components/microcomponents/servicecards/Services"
import MidServicios from "../components/servicios/MidServicios"


const page = () => {
  return (
    <>
    <div className="bg-[#F5F5F5]">
        <FirstSection />
        <ImageCenter />
        <SecondSection />
        <Services />
        <MidServicios />
        <Mision />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection/>
        <SeventhSection />
        <EightSection />
        <NinenthSection />
        <TenSection />
        </div>
    </>
  )
}

export default page
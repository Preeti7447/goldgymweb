import BookFreeTrial from "../../Components/BookFreeTrial/BookFreeTrial"
import BrandLogos from "../../Components/BrandLogos/BrandLogos"
import BusinessVertical from "../../Components/BusinessVertical/BusinessVertical"
import Carousel from "../../Components/Carousel/Carousel"
import Features from "../../Components/Features/Features"
import OurLegacy from "../../Components/OurLegacy/OurLegacy"
import OurPrograms from "../../Components/OurPrograms/OurPrograms"
import PreSale from "../../Components/PreSale/PreSale"


const Home = () => {
  return (
    <>
     <Carousel />
     <Features />
     <OurLegacy />
     <BusinessVertical />
     <BookFreeTrial />
     <BrandLogos />
     <PreSale />
     <OurPrograms />
    </>
  )
}

export default Home
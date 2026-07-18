import BookFreeTrial from "../../Components/BookFreeTrial/BookFreeTrial"
import BrandLogos from "../../Components/BrandLogos/BrandLogos"
import BusinessVertical from "../../Components/BusinessVertical/BusinessVertical"
import Carousel from "../../Components/Carousel/Carousel"
import ContactForm from "../../Components/ContactForm/ContactForm"
import Features from "../../Components/Features/Features"
import Institute from "../../Components/Institute/Institute"
import Membership from "../../Components/Membership/Membership"
import OurLegacy from "../../Components/OurLegacy/OurLegacy"
import OurPrograms from "../../Components/OurPrograms/OurPrograms"
import PreSale from "../../Components/PreSale/PreSale"
import Testimonials from "../../Components/Testimonials/Testimonials"


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
     <Institute />
     <Testimonials />
     <ContactForm />
     <Membership />
    </>
  )
}

export default Home
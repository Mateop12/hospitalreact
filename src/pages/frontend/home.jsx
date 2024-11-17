import Header from "../../components/frontend/header";
import Footer from "../../components/frontend/footer";
import SectionHero from "../../components/frontend/sectionHero"
import SectionWhyUs from "../../components/frontend/sectionWhyUs"
import SectionAbout from "../../components/frontend/sectionAbout"
import SectionCounts from "../../components/frontend/sectionCounts"
import SectionServices from "../../components/frontend/sectionServices"
import AppointmentSection from "../../components/frontend/appointmentSection"
import DepartmentsSection from "../../components/frontend/departmentsSection"
import DoctorsSection from "../../components/frontend/doctorsSection"
import FrequentlyAskedQuestionsSection from "../../components/frontend/frequentlyAskedQuestionsSection"
import TestimonialsSection from "../../components/frontend/testimonialsSection"
import GallerySection from "../../components/frontend/gallerySection"

function home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionWhyUs />
      <SectionAbout/>
      <SectionCounts />
      <SectionServices />
      <AppointmentSection />
      <DepartmentsSection />
      <DoctorsSection />
      <FrequentlyAskedQuestionsSection />
      <TestimonialsSection />
      <GallerySection />
      <Footer />
    </>
  )
}

export default home




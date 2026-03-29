import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import CategorySection from './sections/CategorySection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import ReviewsSection from './sections/ReviewsSection'
import VisitUsSection from './sections/VisitUsSection'
import InquirySection from './sections/InquirySection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <VisitUsSection />
      <InquirySection />
      <Footer />
    </main>
  )
}

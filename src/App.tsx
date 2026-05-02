import Hero from '../Hero'
import Header from '../Header'
import Footer from '../Footer'
import Services from '../Services'
import WhyChooseUs from '../WhyChooseUs'
import Testimonials from '../Testimonials'
import Contact from '../Contact'
import EmergencyBanner from '../EmergencyBanner'
import FloatingCall from '../FloatingCall'
import TrustBar from '../TrustBar'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <EmergencyBanner />
      <Services />
      <WhyChooseUs />
      <TrustBar />
      <Testimonials />
      <Contact />
      <FloatingCall />
      <Footer />
    </>
  )
}

export default App

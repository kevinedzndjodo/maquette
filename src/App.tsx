import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SelectedWork from '@/sections/SelectedWork'
import CelebrityEditorial from '@/sections/CelebrityEditorial'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Academy from '@/sections/Academy'
import Testimonials from '@/sections/Testimonials'
import InstagramSection from '@/sections/InstagramSection'
import Contact from '@/sections/Contact'
import TrainingDetail from '@/pages/TrainingDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <CelebrityEditorial />
      <About />
      <Services />
      <Academy />
      <Testimonials />
      <InstagramSection />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academy/:slug" element={<TrainingDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
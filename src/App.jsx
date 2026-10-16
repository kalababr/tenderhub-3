import useScrollEffects from './hooks/useScrollEffects'
import { useLang } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import SocialRail from './components/SocialRail'
import Hero from './components/Hero'
import Statement from './components/Statement'
import TendersSplit from './components/TendersSplit'
import Directory from './components/Directory'
import News from './components/News'
import Advertise from './components/Advertise'
import Contact from './components/Contact'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

export default function App() {
  const { lang } = useLang()
  useScrollEffects(lang)
  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <Hero />
        <Statement />
        <TendersSplit />
        <Directory />
        <News />
        <Advertise />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
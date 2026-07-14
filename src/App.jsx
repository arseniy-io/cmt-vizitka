import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Audience from './components/Audience'
import Services from './components/Services'
import Brands from './components/Brands'
import Equipment from './components/Equipment'
import Delivery from './components/Delivery'
import About from './components/About'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <div className="page">
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Audience />
        <Services />
        <Brands />
        <Equipment />
        <Delivery />
        <About />
        <LeadForm />
      </main>
      <Footer />
    </div>
  )
}

export default App

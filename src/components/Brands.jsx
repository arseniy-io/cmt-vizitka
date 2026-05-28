import blumImg from '../assets/brands/BLUM.png'
import hafeleImg from '../assets/brands/HAFELE.png'
import aristoImg from '../assets/brands/aristo.png'
import arborNovaImg from '../assets/brands/Arbor Nova.png'
import orwoodImg from '../assets/brands/ORWOOD.png'
import eggerImg from '../assets/brands/EGGER.png'

const brands = [
  { name: 'BLUM', image: blumImg },
  { name: 'HAFELE', image: hafeleImg },
  { name: 'ARISTO', image: aristoImg },
  { name: 'Arbor Nova', image: arborNovaImg },
  { name: 'ORWOOD', image: orwoodImg },
  { name: 'EGGER', image: eggerImg },
]

function Brands() {
  return (
    <section className="section" id="brands">
      <div className="container">
        <h2>Работаем с проверенными брендами</h2>
        <p className="brands-subtitle">
          На складе более 90 актуальных декоров для
          <br />
          быстрого запуска проектов в производство
        </p>
        <div className="brands-grid">
          {brands.map((brand) => (
            <article className={`brand-card ${brand.name === 'BLUM' ? 'blum' : ''}`} key={brand.name}>
              <img src={brand.image} alt={brand.name} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands

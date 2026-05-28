const services = [
  'Проектирование и техническая подготовка',
  'Сверление и присадка',
  'Распил плитных материалов',
  'Кромление деталей',
  'Сверление и присадка',
  'Эмалевые и шпонированные фасады',
  'Алюминиевые витрины',
  'Двери-купе',
  'Комплектация фурнитурой',
  'Столешницы из компакт-плиты',
  'Упаковка и доставка',
]

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <h2 className="services-title">Чем мы можем быть полезны</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={`${service}-${index + 1}`}>
              <div className="service-number">{index + 1}</div>
              <h3 className="service-card-title">{service}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

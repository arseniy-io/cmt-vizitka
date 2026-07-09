function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <article className="about-card">
          <h2 className="about-title">
            Центр Мебельных
            <br />
            Технологий
          </h2>

          <ul className="about-stats">
            <li>25 лет в производстве мебели</li>
            <li>70 000+ реализованных проектов</li>
          </ul>

          <div className="about-body">
            <p>
              Центр Мебельных Технологий специализируется на производстве корпусной мебели под заказ
              для корпоративных клиентов.
            </p>
            <p>
              Мы выступаем производственным партнёром для мебельных салонов, дизайн-студий,
              ремонтных компаний и предпринимателей по всей России.
            </p>
            <p>
              Вы работаете с клиентом, продаёте проект и создаёте дизайн. Мы берём на себя
              техническую реализацию, производство, комплектацию и логистику.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__placeholder" />
      <div className="hero__overlay container">
        <h1>
          ПРОИЗВОДИМ МЕБЕЛЬ
          <br />
          ПОД ВАШЕЙ МАРКОЙ
        </h1>
        <p className="hero__lead">
          Техническая подготовка, производство, комплектация, упаковка и доставка.
          <br />
          Вы занимаетесь продажами и дизайном. Мы отвечаем за производство.
        </p>
        <a className="btn btn--hero" href="#lead-form">Получить партнёрские условия</a>
      </div>
    </section>
  )
}

export default Hero

function Delivery() {
  return (
    <section className="section" id="delivery">
      <div className="container delivery-container">
        <h2 className="delivery-title" data-reveal>Доставка</h2>
        <div className="delivery-grid">
          <div className="delivery-col" data-reveal="card">
            <h3>Бесплатная доставка</h3>
            <p>Организуем доставку до мастерской или склада на территории Череповца или Вологды</p>
          </div>
          <div className="delivery-col" data-reveal="card" data-reveal-delay="70">
            <h3>Платная доставка</h3>
            <p>
              Организуем доставку в другие регионы. Стоимость зависит от города, объёма заказа и
              формата сотрудничества.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery

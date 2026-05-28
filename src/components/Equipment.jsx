function Equipment() {
  return (
    <section className="section" id="equipment">
      <div className="container">
        <h2>Оборудование</h2>
        <div className="equipment-grid">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div className="equipment-placeholder" key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipment

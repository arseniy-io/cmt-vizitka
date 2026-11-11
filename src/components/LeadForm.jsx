function LeadForm() {
  return (
    <section className="section section--form" id="lead-form">
      <div className="container">
        <h2>Получить партнёрские условия</h2>
        <p className="form-sub">
          Напишите нам на почту или позвоните, чтобы обсудить условия сотрудничества.
        </p>
        <div className="contact-options">
          <div className="contact-option">
            <span>Написать на почту</span>
            <a href="mailto:artem.k@cmt35.ru">artem.k@cmt35.ru</a>
          </div>
          <div className="contact-option">
            <span>Позвонить</span>
            <a href="tel:+79212354247">8 (921) 235-42-47</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadForm

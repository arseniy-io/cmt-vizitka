import { useState } from 'react'

function LeadForm() {
  const [message, setMessage] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    setMessage('Заявка подготовлена. Подключите обработчик отправки.')
    event.currentTarget.reset()
  }

  return (
    <section className="section section--form" id="lead-form">
      <div className="container">
        <h2 data-reveal>Получить партнёрские условия</h2>
        <p className="form-sub" data-reveal data-reveal-delay="60">Оставьте контакты, и мы свяжемся с вами для обсуждения сотрудничества.</p>
        <form className="lead-form" onSubmit={onSubmit} data-reveal="card" data-reveal-delay="100">
          <input type="text" name="name" placeholder="Ваше имя" required />
          <input type="tel" name="phone" placeholder="Телефон" required />
          <textarea name="comment" rows="4" placeholder="Комментарий" />
          <label className="consent">
            <input type="checkbox" required />
            <span>Согласен на обработку персональных данных</span>
          </label>
          <button className="btn" type="submit">Отправить заявку</button>
        </form>
        {message && <p className="form-message">{message}</p>}
      </div>
    </section>
  )
}

export default LeadForm

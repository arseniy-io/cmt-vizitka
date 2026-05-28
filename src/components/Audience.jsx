const audienceItems = [
  {
    title: 'Начинающим предпринимателям',
    text: 'Помощь в запуске мебельного проекта без необходимости собственного производства.',
  },
  {
    title: 'Мебельным салонам',
    text: 'Расширение ассортимента продукции и возможность предложения клиентам мебели под заказ.',
  },
  {
    title: 'Дизайнерам интерьеров',
    text: 'Реализация дизайнерских проектов с учётом индивидуальных потребностей клиентов.',
  },
  {
    title: 'Ремонтным компаниям',
    text: 'Комплектация ремонтных проектов качественной мебелью для создания единого стиля помещений.',
  },
]

function Audience() {
  return (
    <section className="audience-section" id="audience">
      <div className="container">
        <h2 className="audience-title">Кому подойдёт сотрудничество</h2>
        <div className="audience-list-wrap">
          <ul className="audience-list">
            {audienceItems.map((item) => (
              <li className="audience-item" key={item.title}>
                <span className="check" aria-hidden="true">✓</span>
                <div>
                  <h3 className="audience-item-title">{item.title}</h3>
                  <p className="audience-item-text">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="audience-cta">
          <a href="#lead-form">Получить условия сотрудничества</a>
        </div>
      </div>
    </section>
  )
}

export default Audience

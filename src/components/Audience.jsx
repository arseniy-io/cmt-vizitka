const audienceItems = [
  {
    number: '01',
    title: 'Начинающим предпринимателям',
    text: 'Помощь в запуске мебельного проекта без необходимости собственного производства.',
  },
  {
    number: '02',
    title: 'Мебельным салонам',
    text: 'Расширение ассортимента продукции и возможность предложения клиентам мебели под заказ.',
  },
  {
    number: '03',
    title: 'Дизайнерам интерьеров',
    text: 'Реализация дизайнерских проектов с учётом индивидуальных потребностей клиентов.',
  },
  {
    number: '04',
    title: 'Ремонтным компаниям',
    text: 'Комплектация ремонтных проектов качественной мебелью для создания единого стиля помещений.',
  },
]

function Audience() {
  return (
    <section className="audience-section" id="audience">
      <div className="container">
        <h2 className="audience-title">Кому подойдёт сотрудничество</h2>

        <div className="audience-grid">
          {audienceItems.map((item) => (
            <article className="audience-card" key={item.title}>
              <div className="audience-card__number" aria-hidden="true">
                {item.number}
              </div>
              <h3 className="audience-card__title">{item.title}</h3>
              <p className="audience-card__text">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="audience-cta">
          <a href="#lead-form">Получить условия сотрудничества</a>
        </div>
      </div>
    </section>
  )
}

export default Audience

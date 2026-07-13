import { useRef, useState } from 'react'

const services = [
  {
    id: 'basis',
    title: 'Проектирование и техническая подготовка',
    short:
      'Готовим проект в БАЗИС-Мебельщике, проверяем размеры, чертежи и файлы для производства.',
    details: [
      'Проектируем и рассчитываем мебель в БАЗИС-Мебельщике по техническому заданию и эскизу заказчика.',
      'Проверяем готовые файлы клиента и адаптируем их под возможности нашего производства.',
      'Вносим нужные правки, согласовываем изменения и формируем пакет чертежей для производства.',
      'Готовим управляющие программы, сметы и документацию для 1С.',
    ],
  },
  {
    id: 'drilling',
    title: 'Сверление и присадка',
    short:
      'Размечаем места под крепеж, петли, направляющие и другую фурнитуру, чтобы сборка прошла точно.',
    details: [
      'Подбираем всю фурнитуру и крепеж под проект.',
      'Правильно расставляем фурнитуру в проекте и готовим карты присадки для производства.',
      'Основная фурнитура находится на складе, поэтому заказы можно быстро комплектовать.',
    ],
  },
  {
    id: 'cutting',
    title: 'Распил плитных материалов',
    short:
      'Распиливаем ЛДСП, МДФ и другие плитные материалы на ЧПУ-оборудовании по картам раскроя.',
    details: [
      'Распил выполняется на пильных центрах под управлением ЧПУ.',
      'Карты раскроя загружаются напрямую из проекта в БАЗИС-Мебельщике.',
      'На каждую деталь наносится этикетка с информацией о проекте, детали и дальнейшей обработке.',
      'По эскизу клиента можем наносить уникальный логотип на этикетку.',
    ],
  },
  {
    id: 'edge',
    title: 'Кромление деталей',
    short:
      'Закрываем торцы деталей мебельной кромкой, чтобы изделие выглядело аккуратно и служило дольше.',
    details: [
      'Кромление выполняется на станках индустриального класса.',
      'В работе используем полиуретановый клей или клей ЭВА в зависимости от задачи и требований проекта.',
    ],
  },
  {
    id: 'facades',
    title: 'Эмалевые и шпонированные фасады',
    short:
      'Изготавливаем фасады с эмалью и натуральным шпоном под нужный стиль и задачу проекта.',
    details: [
      'Производим фасады, окрашенные эмалью.',
      'Изготавливаем фасады, покрытые натуральным шпоном ценных пород дерева.',
      'Подбираем решение под дизайн, бюджет и требования к внешнему виду мебели.',
    ],
  },
  {
    id: 'aluminum',
    title: 'Алюминиевые витрины',
    short:
      'Делаем фасады и витрины из алюминиевого профиля по индивидуальным размерам.',
    details: [
      'Изготавливаем фасады из алюминиевого профиля по размерам конкретного проекта.',
      'На складе есть до 10 видов профилей разной конфигурации и цветов.',
      'Это помогает быстрее запускать проекты в производство без долгого ожидания комплектующих.',
    ],
  },
  {
    id: 'doors',
    title: 'Двери-купе',
    short:
      'Производим двери-купе под шкафы и гардеробные по размерам конкретного объекта.',
    details: [
      'Изготавливаем двери-купе по индивидуальным размерам.',
      'Используем алюминиевые профили разных цветов и конфигураций.',
      'Комплектуем решение под конкретный шкаф, гардеробную или интерьерный проект.',
    ],
  },
  {
    id: 'hardware',
    title: 'Комплектация фурнитурой',
    short:
      'Собираем полный комплект фурнитуры, чтобы после получения заказа можно было сразу начинать монтаж.',
    details: [
      'Каждый заказ комплектуется всей необходимой фурнитурой.',
      'Клиент получает детали и комплектующие в одном заказе.',
      'Это сокращает время на поиск крепежа, петель, направляющих и других элементов перед сборкой.',
    ],
  },
  {
    id: 'worktops',
    title: 'Столешницы из компакт-плиты',
    short:
      'Изготавливаем столешницы из компакт-плиты и искусственного камня по размерам и чертежам.',
    details: [
      'Производим столешницы из компакт-плиты по предоставленным размерам и чертежам.',
      'Также изготавливаем столешницы из искусственного камня.',
      'Работаем с задачами для кухонь, коммерческих помещений и индивидуальных проектов.',
    ],
  },
  {
    id: 'packing',
    title: 'Упаковка и доставка',
    short:
      'Упаковываем детали так, чтобы защитить их от влаги, ударов и повреждений при перевозке.',
    details: [
      'Сначала заказ упаковывается в стрейч-пленку.',
      'Затем детали закрываются картоном и повторно обматываются стрейчем с торцов.',
      'Такая упаковка помогает защитить детали от влаги, ударов и повреждений при транспортировке и погрузке.',
    ],
  },
]

function Services() {
  const [activeServiceId, setActiveServiceId] = useState(null)
  const serviceTriggerRefs = useRef({})
  const activeServiceIndex = services.findIndex((service) => service.id === activeServiceId)
  const activeService = activeServiceIndex >= 0 ? services[activeServiceIndex] : null

  const closeServiceDetails = (serviceId) => {
    const activeTrigger = serviceTriggerRefs.current[serviceId]

    setActiveServiceId(null)

    window.requestAnimationFrame(() => {
      activeTrigger?.focus({ preventScroll: true })
    })
  }

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <h2 className="services-title">Чем мы можем быть полезны</h2>

        <div className="services-layout">
          <div className="services-grid">
            {services.map((service, index) => {
              const isActive = service.id === activeServiceId

              return (
                <article
                  className={`service-card${isActive ? ' service-card--active' : ''}`}
                  key={service.id}
                >
                  <button
                    className="service-card__trigger"
                    type="button"
                    ref={(node) => {
                      serviceTriggerRefs.current[service.id] = node
                    }}
                    aria-label={`${isActive ? 'Скрыть' : 'Подробнее'}: ${service.title}`}
                    aria-expanded={isActive}
                    aria-controls={`service-inline-details-${service.id} service-details-panel`}
                    onClick={() => setActiveServiceId(isActive ? null : service.id)}
                  >
                    <span className="service-number">{index + 1}</span>
                    <span className="service-card-title">{service.title}</span>
                    <span className="service-card-text">{service.short}</span>
                    <span className="service-card-more service-card-more--trigger">
                      {isActive ? 'Скрыть' : 'Подробнее'}
                    </span>
                  </button>

                  {isActive && (
                    <div
                      className="service-card-details service-card-details--inline"
                      id={`service-inline-details-${service.id}`}
                    >
                      <ul>
                        {service.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {isActive && (
                    <button
                      className="service-card-inline-close"
                      type="button"
                      onClick={() => closeServiceDetails(service.id)}
                    >
                      Скрыть
                    </button>
                  )}
                </article>
              )
            })}
          </div>

          <aside
            className={`service-details-panel${activeService ? ' service-details-panel--active' : ''}`}
            id="service-details-panel"
            aria-live="polite"
            aria-labelledby={
              activeService
                ? `service-details-panel-title-${activeService.id}`
                : 'service-details-panel-title-empty'
            }
          >
            {activeService ? (
              <>
                <div className="service-details-panel__top">
                  <span className="service-details-panel__number">{activeServiceIndex + 1}</span>
                  <span className="service-details-panel__eyebrow">Подробнее об услуге</span>
                </div>
                <h3 id={`service-details-panel-title-${activeService.id}`}>
                  {activeService.title}
                </h3>
                <p className="service-details-panel__intro">{activeService.short}</p>
                <ul>
                  {activeService.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <button
                  className="service-details-panel__close"
                  type="button"
                  onClick={() => closeServiceDetails(activeService.id)}
                >
                  Скрыть подробности
                </button>
              </>
            ) : (
              <div className="service-details-panel__empty">
                <span className="service-details-panel__range">01-10</span>
                <span className="service-details-panel__eyebrow">Наши возможности</span>
                <h3 id="service-details-panel-title-empty">Выберите нужную услугу</h3>
                <p>Нажмите на карточку слева, чтобы посмотреть, что входит в работу.</p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Services

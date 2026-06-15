import { useMemo, useState } from 'react'
import { brandsData } from '../data/brandsData'

function Brands() {
  const [activeBrandId, setActiveBrandId] = useState(null)

  const activeBrand = useMemo(
    () => brandsData.find((brand) => brand.id === activeBrandId) ?? null,
    [activeBrandId]
  )

  const toggleBrand = (brandId) => {
    setActiveBrandId((current) => (current === brandId ? null : brandId))
  }

  return (
    <section className="section" id="brands">
      <div className="container">
        <h2>Работаем с проверенными брендами</h2>
        <p className="brands-subtitle">
          На складе более 90 актуальных декоров для
          <br />
          быстрого запуска проектов в производство
        </p>

        <div className="brands-grid">
          {brandsData.map((brand) => {
            const isActive = activeBrandId === brand.id

            return (
              <article
                key={brand.id}
                className={`brand-card ${brand.id === 'blum' ? 'blum' : ''} ${
                  isActive ? 'brand-card--active' : ''
                }`}
                data-tone={brand.tone}
              >
                <button
                  className="brand-card__trigger"
                  type="button"
                  aria-expanded={isActive}
                  aria-pressed={isActive}
                  onClick={() => toggleBrand(brand.id)}
                >
                  <span className="brand-card__logo-wrap">
                    <img src={brand.logo} alt={brand.name} loading="lazy" />
                  </span>
                  <span className="brand-card__hint">{isActive ? 'Скрыть' : 'Подробнее'}</span>
                </button>
              </article>
            )
          })}
        </div>

        {activeBrand ? (
          <section className="brand-details-panel" aria-live="polite">
            <div className="brand-details-panel__top">
              <div
                className={`brand-details-panel__logo ${
                  activeBrand.id === 'blum' ? 'brand-details-panel__logo--blum' : ''
                }`}
              >
                <img src={activeBrand.logo} alt={activeBrand.name} loading="lazy" />
              </div>

              <div className="brand-details-panel__intro">
                <p className="brand-details-panel__label">Выбранный бренд</p>
                <h3>{activeBrand.name}</h3>
                <p className="brand-details-panel__summary">{activeBrand.shortDescription}</p>
              </div>
            </div>

            <div className="brand-details-panel__sections">
              <div className="brand-details-card">
                <h4>Краткая история</h4>
                <ul>
                  {activeBrand.history.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="brand-details-card">
                <h4>Уникальность / Инновации</h4>
                <ul>
                  {activeBrand.uniqueness.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {activeBrand.advantages?.length ? (
                <div className="brand-details-card">
                  <h4>Преимущества</h4>
                  <ul>
                    {activeBrand.advantages.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="brand-details-card">
                <h4>Качество и надежность</h4>
                <ul>
                  {activeBrand.quality.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </section>
  )
}

export default Brands

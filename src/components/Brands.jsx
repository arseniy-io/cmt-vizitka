import { useEffect, useMemo, useRef, useState } from 'react'
import { brandsData } from '../data/brandsData'

function Brands() {
  const [activeBrandId, setActiveBrandId] = useState(null)
  const [isDetailsPanelVisible, setIsDetailsPanelVisible] = useState(false)
  const brandTriggerRefs = useRef({})
  const detailsPanelRef = useRef(null)

  const activeBrand = useMemo(
    () => brandsData.find((brand) => brand.id === activeBrandId) ?? null,
    [activeBrandId]
  )

  useEffect(() => {
    const detailsPanel = detailsPanelRef.current

    if (!detailsPanel) return undefined

    let frameId = null

    const updatePanelVisibility = () => {
      const panelRect = detailsPanel.getBoundingClientRect()

      setIsDetailsPanelVisible(
        panelRect.bottom > 72 && panelRect.top < window.innerHeight - 72
      )
    }

    const requestVisibilityUpdate = () => {
      if (frameId !== null) return

      frameId = window.requestAnimationFrame(() => {
        frameId = null
        updatePanelVisibility()
      })
    }

    requestVisibilityUpdate()
    window.addEventListener('scroll', requestVisibilityUpdate, { passive: true })
    window.addEventListener('resize', requestVisibilityUpdate)

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestVisibilityUpdate)
      window.removeEventListener('resize', requestVisibilityUpdate)
    }
  }, [activeBrandId])

  const toggleBrand = (brandId) => {
    setActiveBrandId((current) => (current === brandId ? null : brandId))
  }

  const closeActiveBrand = () => {
    const activeTrigger = brandTriggerRefs.current[activeBrandId]

    setActiveBrandId(null)

    window.requestAnimationFrame(() => {
      if (!activeTrigger) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      activeTrigger.focus({ preventScroll: true })
      activeTrigger.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'center',
      })
    })
  }

  return (
    <section className="section brands-section" id="brands">
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
                  id={`brand-trigger-${brand.id}`}
                  ref={(node) => {
                    brandTriggerRefs.current[brand.id] = node
                  }}
                  aria-expanded={isActive}
                  aria-pressed={isActive}
                  aria-controls="brand-details-panel"
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
          <section
            className="brand-details-panel"
            id="brand-details-panel"
            ref={detailsPanelRef}
            aria-live="polite"
            aria-labelledby={`brand-trigger-${activeBrand.id}`}
          >
            <div
              className={`brand-details-panel__close-dock ${
                isDetailsPanelVisible ? 'brand-details-panel__close-dock--visible' : ''
              }`}
            >
              <button
                className="brand-details-panel__close"
                type="button"
                onClick={closeActiveBrand}
                aria-label={`Скрыть информацию о бренде ${activeBrand.name}`}
              >
                <span>Скрыть</span>
                <span className="brand-details-panel__close-icon" aria-hidden="true">
                  <svg viewBox="0 0 16 16" focusable="false">
                    <path d="m3 10 5-5 5 5" />
                  </svg>
                </span>
              </button>
            </div>

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

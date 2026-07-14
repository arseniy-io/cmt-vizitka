import { useLayoutEffect } from 'react'

const REVEAL_SELECTOR = '[data-reveal]'

function ScrollReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const completionTimers = new Set()

    elements.forEach((element) => {
      const delay = Number(element.dataset.revealDelay)

      if (Number.isFinite(delay) && delay > 0) {
        element.style.setProperty('--reveal-delay', `${Math.min(delay, 240)}ms`)
      }
    })

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed', 'reveal-complete'))
      return undefined
    }

    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)

          const delay = Math.min(Number(entry.target.dataset.revealDelay) || 0, 240)
          const timer = window.setTimeout(() => {
            entry.target.classList.add('reveal-complete')
            completionTimers.delete(timer)
          }, delay + 750)

          completionTimers.add(timer)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      completionTimers.forEach((timer) => window.clearTimeout(timer))
      root.classList.remove('reveal-ready')
    }
  }, [])

  return null
}

export default ScrollReveal

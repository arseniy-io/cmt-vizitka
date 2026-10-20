import { useLayoutEffect } from 'react'

const REVEAL_SELECTOR = '[data-reveal]'
const FAST_SCROLL_WINDOW_MS = 140
const FAST_SCROLL_COOLDOWN_MS = 180
const FAST_SCROLL_STEP_RATIO = 0.45
const FAST_SCROLL_DISTANCE_RATIO = 0.85
const INITIAL_RUSH_MS = 900

function ScrollReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const completionTimers = new Map()

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

    let observer = null
    let revealFrame = null
    let lastScrollY = window.scrollY
    let scrollWindowStartedAt = performance.now()
    let scrollWindowDistance = 0
    let fastScrollUntil = 0
    let fastScrollDirection = 1

    const clearCompletionTimer = (element) => {
      const timer = completionTimers.get(element)

      if (timer !== undefined) {
        window.clearTimeout(timer)
        completionTimers.delete(element)
      }
    }

    const revealImmediately = (element) => {
      clearCompletionTimer(element)
      element.classList.add('is-revealed', 'reveal-complete')

      element.getAnimations().forEach((animation) => animation.cancel())

      observer?.unobserve(element)
    }

    const scheduleRevealCompletion = (element) => {
      clearCompletionTimer(element)

      const delay = Math.min(Number(element.dataset.revealDelay) || 0, 240)
      const timer = window.setTimeout(() => {
        element.classList.add('reveal-complete')
        completionTimers.delete(element)
      }, delay + 750)

      completionTimers.set(element, timer)
    }

    const revealWithMotion = (element) => {
      observer?.unobserve(element)
      if (element.classList.contains('reveal-complete')) return

      element.classList.add('is-revealed')
      scheduleRevealCompletion(element)
    }

    const isFastScrollActive = () => {
      const now = performance.now()
      const unhandledDistance = Math.abs(window.scrollY - lastScrollY)
      const isInitialRush =
        now < INITIAL_RUSH_MS && window.scrollY > window.innerHeight * 0.6

      return (
        now < fastScrollUntil ||
        unhandledDistance > window.innerHeight * FAST_SCROLL_STEP_RATIO ||
        isInitialRush
      )
    }

    const revealPassedElements = () => {
      const passedElements = elements.filter((element) => {
        if (element.classList.contains('reveal-complete')) return false

        const rect = element.getBoundingClientRect()

        return fastScrollDirection >= 0
          ? rect.top < window.innerHeight
          : rect.bottom > 0
      })

      passedElements.forEach(revealImmediately)
    }

    const handleScroll = () => {
      const now = performance.now()
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY
      const scrollDistance = Math.abs(scrollDelta)

      if (now - scrollWindowStartedAt > FAST_SCROLL_WINDOW_MS) {
        scrollWindowStartedAt = now
        scrollWindowDistance = 0
      }

      scrollWindowDistance += scrollDistance
      lastScrollY = currentScrollY

      const isFastScroll =
        scrollDistance > window.innerHeight * FAST_SCROLL_STEP_RATIO ||
        scrollWindowDistance > window.innerHeight * FAST_SCROLL_DISTANCE_RATIO

      if (!isFastScroll) return

      fastScrollDirection = Math.sign(scrollDelta) || fastScrollDirection
      fastScrollUntil = now + FAST_SCROLL_COOLDOWN_MS

      if (revealFrame === null) {
        revealFrame = window.requestAnimationFrame(() => {
          revealFrame = null
          revealPassedElements()
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          if (isFastScrollActive()) {
            revealImmediately(entry.target)
          } else {
            revealWithMotion(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px 12% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      if (revealFrame !== null) window.cancelAnimationFrame(revealFrame)
      completionTimers.forEach((timer) => window.clearTimeout(timer))
      root.classList.remove('reveal-ready')
    }
  }, [])

  return null
}

export default ScrollReveal

import { useEffect, useRef, useState } from 'react'

const equipmentVideos = [
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0727.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0728.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0731.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0732.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0733.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0727.mp4',
]

function Equipment() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null)
  const videoRefs = useRef([])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return

      if (index === activeVideoIndex) {
        video.muted = false
        video.volume = 0.1
        void video.play().catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [activeVideoIndex])

  const handlePlayToggle = (index) => {
    setActiveVideoIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="section" id="equipment">
      <div className="container">
        <h2 data-reveal>Оборудование</h2>
        <div className="equipment-grid">
          {equipmentVideos.map((src, idx) => {
            const isActive = activeVideoIndex === idx

            return (
              <div
                className={`equipment-placeholder equipment-item ${
                  isActive ? 'equipment-item--active' : ''
                }`}
                key={src + idx}
                data-reveal="card"
                data-reveal-delay={String((idx % 3) * 65)}
              >
                <video
                  ref={(node) => {
                    videoRefs.current[idx] = node
                  }}
                  className="equipment-video"
                  src={src}
                  controls={isActive}
                  playsInline
                  preload="metadata"
                  onEnded={() => setActiveVideoIndex(null)}
                  onPause={() => {
                    setActiveVideoIndex((current) => (current === idx ? null : current))
                  }}
                />

                <button
                  className={`equipment-play ${isActive ? 'is-hidden' : ''}`}
                  type="button"
                  onClick={() => handlePlayToggle(idx)}
                  aria-label="Включить видео"
                >
                  <span className="equipment-play__icon" aria-hidden="true">
                    ▶
                  </span>
                  <span className="equipment-play__text">Смотреть</span>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Equipment

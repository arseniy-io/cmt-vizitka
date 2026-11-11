import { useEffect, useRef, useState } from 'react'
import poster0727 from '../assets/equipment/IMG_0727.webp'
import poster0728 from '../assets/equipment/IMG_0728.webp'
import poster0731 from '../assets/equipment/IMG_0731.webp'
import poster0732 from '../assets/equipment/IMG_0732.webp'
import poster0733 from '../assets/equipment/IMG_0733.webp'

const equipmentVideos = [
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0727.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0728.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0731.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0732.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0733.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0727.mp4',
]
const equipmentPosters = [poster0727, poster0728, poster0731, poster0732, poster0733, poster0727]

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
        if (video.readyState > 0) video.currentTime = 0
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
              <div key={src + idx} data-reveal="card" data-reveal-delay={String((idx % 3) * 65)}>
                <div className={`equipment-placeholder equipment-item ${isActive ? 'equipment-item--active' : ''}`}>
                <video
                  ref={(node) => {
                    videoRefs.current[idx] = node
                  }}
                  className="equipment-video"
                  poster={equipmentPosters[idx]}
                  src={isActive ? src : undefined}
                  controls={isActive}
                  playsInline
                  preload="none"
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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Equipment

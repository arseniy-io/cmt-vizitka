const equipmentVideos = [
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0727.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0728.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0731.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0732.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0733.mp4',
  'https://storage.yandexcloud.net/items-photos-test/vizitka/IMG_0727.mp4',
]

function Equipment() {
  return (
    <section className="section" id="equipment">
      <div className="container">
        <h2>Оборудование</h2>
        <div className="equipment-grid">
          {equipmentVideos.map((src, idx) => (
            <div className="equipment-placeholder equipment-item" key={src + idx}>
              <video
                className="equipment-video"
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equipment

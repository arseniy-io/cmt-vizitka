import logoImg from '../assets/logo/logo_new2_1.png'
import wordmarkImg from '../assets/logo/cmt-wordmark.png'

const navItems = [
  { href: '#audience', label: 'Кому подойдет сотрудничество' },
  { href: '#services', label: 'Чем мы можем быть полезны' },
  { href: '#brands', label: 'Бренды' },
  { href: '#equipment', label: 'Оборудование' },
  { href: '#delivery', label: 'Доставка' },
  { href: '#about', label: 'О компании' },
]

const phoneItems = [
  {
    href: 'tel:+78202505050',
    label: 'Череповец:',
    number: '+7 (8202) 50-50-50',
    ariaLabel: 'Позвонить в Череповец по номеру +7 8202 50 50 50',
  },
  {
    href: 'tel:+78172505050',
    label: 'Вологда:',
    number: '+7 (8172) 50-50-50',
    ariaLabel: 'Позвонить в Вологду по номеру +7 8172 50 50 50',
  },
]

function Header() {
  const firstNavRow = navItems.slice(0, 3)
  const secondNavRow = navItems.slice(3)

  return (
    <header className="header" id="top">
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label="Логотип ЦМТ">
          <span className="logo">
            <img src={logoImg} alt="ЦМТ" />
          </span>
          <span className="brand__wordmark" aria-hidden="true">
            <img src={wordmarkImg} alt="" />
          </span>
        </a>

        <nav className="nav" aria-label="Основное меню">
          <div className="nav__row">
            {firstNavRow.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav__row nav__row--second">
            {secondNavRow.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="phones" aria-label="Контакты">
          {phoneItems.map((item) => (
            <a key={item.href} href={item.href} aria-label={item.ariaLabel}>
              <span className="phones__label">{item.label}</span>
              <span className="phones__number">{item.number}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header

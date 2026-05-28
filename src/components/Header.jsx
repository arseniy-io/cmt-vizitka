import logoImg from '../assets/logo/logo_new2_1.png'

const navItems = [
  { href: '#audience', label: 'Кому подойдет сотрудничество' },
  { href: '#services', label: 'Чем мы можем быть полезны' },
  { href: '#brands', label: 'Бренды' },
  { href: '#equipment', label: 'Оборудование' },
  { href: '#delivery', label: 'Доставка' },
  { href: '#about', label: 'О компании' },
  { href: '#lead-form', label: 'Контакты', className: 'nav__contacts' },
]

function Header() {
  return (
    <header className="header" id="top">
      <div className="container header__inner">
        <a className="logo" href="#top" aria-label="Логотип CMT">
          <img src={logoImg} alt="ЦМТ" />
        </a>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={item.className || ''}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="phones">
          <a href="tel:+78202505050">Череповец: +7 (8202) 50-50-50</a>
          <a href="tel:+78172505050">Вологда: +7 (8172) 50-50-50</a>
        </div>
      </div>
    </header>
  )
}

export default Header

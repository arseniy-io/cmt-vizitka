# Architecture

Навигация: [[INDEX]] · [[PROJECT_CONTEXT]] · [[STYLES]] · [[CONTENT]] · [[BUILD_DEPLOY]] · [[AI_CONTEXT]]

Markdown links: [INDEX.md](./INDEX.md) · [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) · [STYLES.md](./STYLES.md) · [CONTENT.md](./CONTENT.md) · [BUILD_DEPLOY.md](./BUILD_DEPLOY.md) · [AI_CONTEXT.md](./AI_CONTEXT.md)

## Точки входа

- [src/main.jsx](../src/main.jsx) - рендерит `App` и подключает [src/styles.css](../src/styles.css).
- [src/App.jsx](../src/App.jsx) - собирает страницу из секций в правильном порядке.

## Композиция страницы

В [src/App.jsx](../src/App.jsx) секции подключаются в таком порядке:

1. `Header`
2. `Hero`
3. `Intro`
4. `Audience`
5. `Services`
6. `Brands`
7. `Equipment`
8. `Delivery`
9. `About`
10. `LeadForm`
11. `Footer`

## Компоненты

Папка [src/components](../src/components) - основная зона секционной логики. Каждый компонент отвечает за один экранный блок.

- `Header.jsx` - логотип, навигация, телефоны.
- `Hero.jsx` - главный оффер и CTA.
- `Intro.jsx` - поясняющий текст после hero.
- `Audience.jsx` - карточки целевой аудитории.
- `Services.jsx` - карточки услуг 1-11.
- `Brands.jsx` - сетка брендов и раскрывающаяся информационная панель.
- `Equipment.jsx` - сетка из 6 видео-карточек.
- `Delivery.jsx` - условия бесплатной и платной доставки.
- `About.jsx` - блок о компании.
- `LeadForm.jsx` - локальная форма без реальной отправки.
- `Footer.jsx` - нижняя часть страницы.

## Source of truth по данным

- [src/data/brandsData.js](../src/data/brandsData.js) - главный источник данных для секции брендов.

Если меняется текст, структура блоков бренда, список преимуществ, история или качество, сначала нужно проверить именно этот файл.

## Source of truth по стилям

- [src/styles.css](../src/styles.css) - основной активный stylesheet проекта.

Важно:

- [src/main.jsx](../src/main.jsx) импортирует только `./styles.css`.
- [src/App.css](../src/App.css) и [src/index.css](../src/index.css) сейчас не являются рабочим источником визуала и выглядят как остатки шаблона Vite. Перед использованием их лучше осознанно пересмотреть, а не считать частью текущей архитектуры.

## Assets

- [src/assets/brands](../src/assets/brands) - изображения брендов.
- [src/assets/logo](../src/assets/logo) - логотип.
- [src/assets/hero.png](../src/assets/hero.png) - исторический ассет; сейчас hero визуально построен через плейсхолдер и CSS.

## Тесты и верификация

- [tests/visual.spec.js](../tests/visual.spec.js) - Playwright smoke-test скриншотов.

Этот тест ожидает, что dev-сервер уже доступен по `http://localhost:5173`.

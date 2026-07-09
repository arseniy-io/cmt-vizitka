# Styles

Навигация: [[INDEX]] · [[PROJECT_CONTEXT]] · [[ARCHITECTURE]] · [[CONTENT]] · [[BUILD_DEPLOY]] · [[AI_CONTEXT]]

Markdown links: [INDEX.md](./INDEX.md) · [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) · [ARCHITECTURE.md](./ARCHITECTURE.md) · [CONTENT.md](./CONTENT.md) · [BUILD_DEPLOY.md](./BUILD_DEPLOY.md) · [AI_CONTEXT.md](./AI_CONTEXT.md)

## Source of truth

Главный файл визуала: [src/styles.css](../src/styles.css)

Все основные цвета, layout, hover-эффекты и media queries зафиксированы именно там.

## Основные переменные

В `:root` сейчас определены:

- `--bg: #3b3330`
- `--header: #2c2522`
- `--card: #242424`
- `--text: #f6f1eb`
- `--muted: #ddd4cb`
- `--accent: #ff7600`
- `--placeholder: #000000`
- `--container: 1440px`
- `--radius: 16px`

## Визуальная логика проекта

- Главный фон страницы - темно-коричневый.
- Акцентный цвет - яркий оранжевый.
- Hero - темный, с крупной белой типографикой.
- Services - темные карточки на контрасте с фоном.
- Audience и brand-details-panel - светлые B2B-карточки.
- About - крупная оранжевая карточка.

## Сетки и контейнеры

- Основной контейнер: `width: min(var(--container), calc(100% - 72px))`
- `Services`: 3 колонки на desktop.
- `Brands`: 3 колонки на desktop.
- `Equipment`: 3 колонки на desktop.
- `Audience`: 2x2 на desktop.

## Breakpoints

Основные брейкпоинты:

- `1024px`
- `768px`
- `480px`
- `390px`
- `380px`
- `360px`
- `320px`

## Поведение на mobile

- Header перестраивается в один столбец.
- Audience становится в 1 колонку.
- Services остаются компактной сеткой, а не длинной 1-колоночной лентой.
- Brands и Equipment переходят в 2 колонки на tablet/mobile.
- CTA-кнопки получают `max-width`, чтобы не ломать текст.

## Hover и интерактив

- CTA-кнопки слегка поднимаются и получают мягкую тень.
- `service-card`, `brand-card`, `audience-card`, `equipment-placeholder` имеют плавные hover-переходы.
- В `prefers-reduced-motion: reduce` анимации отключаются.

## Что нельзя ломать без явного запроса

- коричневый фон `#3b3330`;
- оранжевый акцент `#ff7600`;
- базовую композицию header/hero;
- mobile-адаптив текущих секций;
- светлую подробную панель брендов;
- размеры и сетку производственных карточек без отдельной задачи.

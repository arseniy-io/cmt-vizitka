# CMT Landing

Локальный React + Vite проект лендинга для "Центра Мебельных Технологий". Это не Mini App и не Tilda-копия: сайт собран компонентно и поддерживается как отдельный кодовый продукт.

Быстрый старт:

```bash
npm install
npm run dev
npm run build
```

Дополнительная проверка:

```bash
npm run screenshot
```

Карта документации:

- [docs/INDEX.md](docs/INDEX.md)
- [docs/PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md)
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- [docs/STYLES.md](docs/STYLES.md)
- [docs/DESIGN_DENSITY_PLAN.md](docs/DESIGN_DENSITY_PLAN.md)
- [docs/CONTENT.md](docs/CONTENT.md)
- [docs/BUILD_DEPLOY.md](docs/BUILD_DEPLOY.md)
- [docs/AI_CONTEXT.md](docs/AI_CONTEXT.md)

Wiki-links для редакторов с поддержкой internal links:

- `[[docs/INDEX]]`
- `[[docs/PROJECT_CONTEXT]]`
- `[[docs/ARCHITECTURE]]`
- `[[docs/STYLES]]`
- `[[docs/DESIGN_DENSITY_PLAN]]`
- `[[docs/CONTENT]]`
- `[[docs/BUILD_DEPLOY]]`
- `[[docs/AI_CONTEXT]]`

Ключевые файлы:

- Точка входа: [src/main.jsx](src/main.jsx)
- Корневая композиция секций: [src/App.jsx](src/App.jsx)
- Основные стили: [src/styles.css](src/styles.css)
- Данные брендов: [src/data/brandsData.js](src/data/brandsData.js)
- Визуальный smoke-test: [tests/visual.spec.js](tests/visual.spec.js)

Текущий принцип поддержки:

- секции лендинга собираются в [src/App.jsx](src/App.jsx);
- source of truth для визуала находится в [src/styles.css](src/styles.css);
- source of truth для брендов и текста внутри их карточек находится в [src/data/brandsData.js](src/data/brandsData.js);
- служебные артефакты сборки и тестов не должны попадать в Git.

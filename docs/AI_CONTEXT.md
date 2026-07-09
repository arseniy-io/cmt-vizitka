# AI Context

Навигация: [[INDEX]] · [[PROJECT_CONTEXT]] · [[ARCHITECTURE]] · [[STYLES]] · [[CONTENT]] · [[BUILD_DEPLOY]]

Markdown links: [INDEX.md](./INDEX.md) · [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) · [ARCHITECTURE.md](./ARCHITECTURE.md) · [STYLES.md](./STYLES.md) · [CONTENT.md](./CONTENT.md) · [BUILD_DEPLOY.md](./BUILD_DEPLOY.md)

## Коротко о проекте

`cmt-landing` - это отдельный React/Vite лендинг производственной компании CMT. Он не связан с Mini App и не должен использовать его код, структуру и смысловые блоки.

## Что считать source of truth

- структура страницы: [src/App.jsx](../src/App.jsx)
- активные стили: [src/styles.css](../src/styles.css)
- бренды и их расширенный контент: [src/data/brandsData.js](../src/data/brandsData.js)
- визуальный smoke-test: [tests/visual.spec.js](../tests/visual.spec.js)

## Что нельзя делать без явного запроса

- добавлять новые секции;
- возвращать padel, бронирование, календарь, корт, оплату;
- перетаскивать проект в Mini App;
- ломать текущую mobile-композицию;
- заменять айдентику на другую палитру или другой характер интерфейса;
- захламлять Git скриншотами, `dist`, `test-results` и локальными логами.

## Что важно помнить при правках

- Визуал должен оставаться в текущем коричнево-оранжевом стиле.
- Правки лучше делать точечно в соответствующем компоненте и в [src/styles.css](../src/styles.css), а не разносить стили по разным файлам.
- Блок брендов уже имеет отдельную архитектуру с подробной панелью и не должен раскрываться внутри карточек.
- Блок equipment уже переведен на видео-контент и требует осторожного обращения в визуальных тестах.

## Быстрый маршрут чтения для нового исполнителя

1. Открыть [../README.md](../README.md)
2. Прочитать [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md)
3. Прочитать [ARCHITECTURE.md](./ARCHITECTURE.md)
4. Прочитать [STYLES.md](./STYLES.md)
5. Если задача про бренды - открыть [CONTENT.md](./CONTENT.md)
6. Если задача про сборку, Git или деплой - открыть [BUILD_DEPLOY.md](./BUILD_DEPLOY.md)

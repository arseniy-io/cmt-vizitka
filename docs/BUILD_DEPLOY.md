# Build Deploy

Навигация: [[INDEX]] · [[PROJECT_CONTEXT]] · [[ARCHITECTURE]] · [[STYLES]] · [[CONTENT]] · [[AI_CONTEXT]]

Markdown links: [INDEX.md](./INDEX.md) · [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) · [ARCHITECTURE.md](./ARCHITECTURE.md) · [STYLES.md](./STYLES.md) · [CONTENT.md](./CONTENT.md) · [AI_CONTEXT.md](./AI_CONTEXT.md)

## Основные команды

Установить зависимости:

```bash
npm install
```

Локальная разработка:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Playwright screenshots:

```bash
npm run screenshot
```

## Как устроен build

- Проект собирается через Vite.
- Production build использует стандартное хеширование Vite для JS, CSS и asset-файлов.
- Финальные файлы попадают в `dist/`.

## Визуальная проверка

Файл [tests/visual.spec.js](../tests/visual.spec.js) делает full-page screenshots для:

- desktop
- tablet `768`
- mobile `430`
- mobile `390`

Важно:

- тест рассчитывает на уже запущенный dev-сервер `http://localhost:5173`;
- screenshots пишутся в `screenshots/`;
- для видео секции equipment тест сначала принудительно запускает `<video>`, затем делает паузу перед снимком.

## Git hygiene

В Git не должны попадать:

- `node_modules/`
- `dist/`
- `playwright-report/`
- `test-results/`
- `screenshots/`
- `*.log`
- `*.err`
- временные локальные файлы редактора

Актуальные правила находятся в [../.gitignore](../.gitignore).

## Деплой и публикация

Если платформа просит настройки:

- install command: `npm install`
- build command: `npm run build`
- output directory: `dist`

Если в будущем появится CI или хостинг-конфиг, его нужно описывать именно в этом файле.

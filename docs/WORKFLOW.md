# Работа с проектом

[Карта](./INDEX.md) · [Проект](./PROJECT.md) · [Архитектура](./ARCHITECTURE.md) · [Дизайн](./DESIGN.md) · [Решения](./DECISIONS.md)

Wiki: `[[INDEX]]` · `[[PROJECT]]` · `[[ARCHITECTURE]]` · `[[DESIGN]]` · `[[DECISIONS]]`.

## Установка и запуск

```bash
npm install
npm run dev
```

Vite обычно открывает проект по адресу `http://localhost:5173`.

## Команды

```bash
npm run lint
npm run build
npm run preview
npm run screenshot
```

- `lint` проверяет код.
- `build` создаёт production-сборку в `dist/`.
- `preview` показывает собранную версию.
- `screenshot` запускает Playwright, сохраняет четыре полноэкранных снимка и проверяет переполнение, раскрытие услуг и возврат фокуса.

Перед `npm run screenshot` нужно отдельно запустить `npm run dev`. Тест открывает `http://localhost:5173`, проверяет ширины 1920, 768, 430 и 390 пикселей, а также отдельный низкий desktop-экран 1280 на 600 пикселей.

## Проверка после правок

Для обычного изменения:

```bash
npm run lint
npm run build
```

Для изменения внешнего вида дополнительно сделать скриншоты и проверить отсутствие горизонтального скролла.

## Деплой

Обычные настройки для платформы:

- установка зависимостей: `npm install`;
- команда сборки: `npm run build`;
- папка результата: `dist`;
- путь до проекта в монорепозитории: пустой, если репозиторий начинается с `cmt-landing`.

Vite использует стандартные имена файлов с хешем, например `index-abc123.js` и `index-abc123.css`.

## Чистота проекта

Не добавлять в Git:

- `node_modules/`;
- `dist/`;
- `screenshots/`;
- `test-results/` и `playwright-report/`;
- `*.log`, `*.err` и временные файлы редакторов.

Перед коммитом проверить:

```bash
git status --short
git diff --check
```

Не коммитить изменения, которые не относятся к текущей задаче.

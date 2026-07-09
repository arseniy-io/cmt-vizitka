# Content

Навигация: [[INDEX]] · [[PROJECT_CONTEXT]] · [[ARCHITECTURE]] · [[STYLES]] · [[BUILD_DEPLOY]] · [[AI_CONTEXT]]

Markdown links: [INDEX.md](./INDEX.md) · [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) · [ARCHITECTURE.md](./ARCHITECTURE.md) · [STYLES.md](./STYLES.md) · [BUILD_DEPLOY.md](./BUILD_DEPLOY.md) · [AI_CONTEXT.md](./AI_CONTEXT.md)

## Где лежат тексты

Тексты распределены по двум типам:

- локальные массивы внутри компонентов;
- отдельный data-файл для сложного контента.

## Главный data-файл

- [src/data/brandsData.js](../src/data/brandsData.js)

Это главный источник данных для блока брендов. Сейчас он хранит карточки:

- `BLUM`
- `HAFELE`
- `ARISTO`
- `EGGER`
- `ORWOOD`
- `Arbor Nova`

У брендов используются поля:

- `id`
- `name`
- `logo`
- `tone`
- `shortDescription`
- `history`
- `uniqueness`
- `advantages`
- `quality`

## Где тексты лежат прямо в компонентах

- [src/components/Hero.jsx](../src/components/Hero.jsx) - главный оффер и подзаголовок.
- [src/components/Audience.jsx](../src/components/Audience.jsx) - 4 карточки аудиторий.
- [src/components/Services.jsx](../src/components/Services.jsx) - 11 услуг.
- [src/components/LeadForm.jsx](../src/components/LeadForm.jsx) - локальная форма и сообщение об отправке.

## Медиа и ассеты

- [src/assets/logo/logo_new2_1.png](../src/assets/logo/logo_new2_1.png) - логотип в шапке.
- [src/assets/brands](../src/assets/brands) - изображения брендов.
- [src/components/Equipment.jsx](../src/components/Equipment.jsx) - список видео-URL для оборудования хранится прямо в компоненте.

## Контентные ограничения

- Не добавлять тексты про padel, корты, спорт-клуб, бронирование и оплату.
- Не превращать лендинг в редакционную статью.
- Тон должен оставаться B2B: уверенный, спокойный, производственный.
- Если меняется список брендов, сначала проверить, что сетка и подробная панель под это адаптированы.

## Что редактировать при частых задачах

- Нужно заменить тексты секции - редактировать соответствующий компонент.
- Нужно заменить структуру и контент брендов - редактировать [src/data/brandsData.js](../src/data/brandsData.js) и [src/components/Brands.jsx](../src/components/Brands.jsx).
- Нужно заменить логотип или изображения брендов - редактировать файлы в [src/assets](../src/assets).

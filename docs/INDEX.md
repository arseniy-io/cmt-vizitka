# Документация CMT Landing

Это главная карта документов. Начинать работу нужно с корневого [AGENTS.md](../AGENTS.md), а затем открывать только нужный раздел.

## Документы

| Документ | Когда читать |
| --- | --- |
| [PROJECT.md](./PROJECT.md) | Нужно понять, что это за сайт, для кого он и чего в нём быть не должно |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Нужно быстро найти компонент, данные, ассет или источник стилей |
| [DESIGN.md](./DESIGN.md) | Задача касается цветов, размеров, отступов, сеток или адаптива |
| [DECISIONS.md](./DECISIONS.md) | Меняется поведение услуг, брендов, видео, шапки или формы |
| [WORKFLOW.md](./WORKFLOW.md) | Нужно запустить, проверить, собрать или развернуть проект |

Wiki-навигация: `[[PROJECT]]` · `[[ARCHITECTURE]]` · `[[DESIGN]]` · `[[DECISIONS]]` · `[[WORKFLOW]]`.

## Быстрый маршрут

- Обычная правка секции: `AGENTS.md` -> нужный компонент -> соответствующий раздел `src/styles.css`.
- Правка брендов: `ARCHITECTURE.md` -> `src/components/Brands.jsx` -> `src/data/brandsData.js`.
- Правка внешнего вида: `DESIGN.md` -> `src/styles.css`.
- Ошибка запуска или деплоя: `WORKFLOW.md`.

[README](../README.md) · [AGENTS](../AGENTS.md)

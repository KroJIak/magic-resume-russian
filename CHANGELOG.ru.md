# Журнал изменений

[English](./CHANGELOG.md) | [Русский](./CHANGELOG.ru.md)

## v2.0.6

[сравнить изменения](https://github.com/JOYCEQL/magic-resume/compare/v2.0.5...main)

### 🚀 Улучшения

- Реализована надежная синхронизация файлов резюме с разрешением конфликтов и улучшенным форматированием диапазонов дат ([5d108f4](https://github.com/JOYCEQL/magic-resume/commit/5d108f4))
- Выпадающее меню экспорта заменено на диалог в стиле glassmorphism ([da12188](https://github.com/JOYCEQL/magic-resume/commit/da12188))
- Логика экспорта вынесена в компонент `PdfExport`, что упростило `PreviewDock` ([16eda66](https://github.com/JOYCEQL/magic-resume/commit/16eda66))
- Добавлено дублирование резюме ([9ea60ac](https://github.com/JOYCEQL/magic-resume/commit/9ea60ac))
- В шапку добавлен встроенный редактор названия резюме ([3567e91](https://github.com/JOYCEQL/magic-resume/commit/3567e91))
- Добавлен швейцарский шаблон резюме ([3789fe4](https://github.com/JOYCEQL/magic-resume/commit/3789fe4))

### 🔥 Производительность

- Оптимизирована производительность reorder в `BasicPanel` ([0c00fb0](https://github.com/JOYCEQL/magic-resume/commit/0c00fb0))

### 🩹 Исправления

- Улучшен парсинг AI-стримов и обработка ошибок ([a6c4aa9](https://github.com/JOYCEQL/magic-resume/commit/a6c4aa9))
- Размер шрифта ссылки проекта начал корректно реагировать на `typography.subheaderSize` ([3658c99](https://github.com/JOYCEQL/magic-resume/commit/3658c99))
- Исправлен баг с диапазоном дат в только что созданном опыте работы ([4bd98e7](https://github.com/JOYCEQL/magic-resume/commit/4bd98e7))
- **editorial:** унифицирован белый фон для PDF-экспорта ([5d7b9fc](https://github.com/JOYCEQL/magic-resume/commit/5d7b9fc))

### 💅 Рефакторинг

- Стандартизированы layout-компоненты `BaseInfo` ([2395638](https://github.com/JOYCEQL/magic-resume/commit/2395638))

### 📖 Документация

- Обновлен `readme.md` ([d23e855](https://github.com/JOYCEQL/magic-resume/commit/d23e855))

### 🏡 Служебные изменения

- Обновлено изображение WeChat QR-кода ([c85ecc7](https://github.com/JOYCEQL/magic-resume/commit/c85ecc7))

### 🎨 Стили

- Удален modal UI ([042acf2](https://github.com/JOYCEQL/magic-resume/commit/042acf2))
- Обновлены стили drag handle для более удобного взаимодействия ([60fc4fb](https://github.com/JOYCEQL/magic-resume/commit/60fc4fb))
- Убраны рамки боковой панели ([0105215](https://github.com/JOYCEQL/magic-resume/commit/0105215))
- Обновлено модальное окно экспорта ([f6f1b20](https://github.com/JOYCEQL/magic-resume/commit/f6f1b20))
- Унифицирован макет `BaseInfo` и перенос текста во всех шаблонах резюме ([a9be325](https://github.com/JOYCEQL/magic-resume/commit/a9be325))
- Унифицированы стили превью резюме через класс `.resume-preview`, `tiptap.scss` подключен глобально ([baec353](https://github.com/JOYCEQL/magic-resume/commit/baec353))

### ❤️ Участники

- JOYCEQL <1449239013@qq.com>
- Jul1en_lin <1577045857@qq.com>
- Zpekii <Zpekii3156@qq.com>
- Liu Zhening ([@HYPERVAPOR](https://github.com/HYPERVAPOR))

## v2.0.5

[сравнить изменения](https://github.com/JOYCEQL/magic-resume/compare/v2.0.3...main)

### 🚀 Улучшения

- Добавлены сведения о лицензировании шрифтов ([4ecf99d](https://github.com/JOYCEQL/magic-resume/commit/4ecf99d))
- В rich text добавлена поддержка ссылок ([b6f01d9](https://github.com/JOYCEQL/magic-resume/commit/b6f01d9))
- Реализованы снапшоты шаблонов ([0ec010e](https://github.com/JOYCEQL/magic-resume/commit/0ec010e))
- Добавлены заранее сгенерированные снапшоты шаблонов ([fd76ba1](https://github.com/JOYCEQL/magic-resume/commit/fd76ba1))
- В `AIPolishDialog` добавлены пользовательские инструкции ([9d1d6c4](https://github.com/JOYCEQL/magic-resume/commit/9d1d6c4))
- Переработан выбор цвета темы в боковой панели ([78ccc3e](https://github.com/JOYCEQL/magic-resume/commit/78ccc3e))
- Добавлен FAQ ([1d936e4](https://github.com/JOYCEQL/magic-resume/commit/1d936e4))
- Добавлен новый шаблон резюме `Editorial` ([107a9d8](https://github.com/JOYCEQL/magic-resume/commit/107a9d8))
- Добавлен индикатор статуса резервного копирования ([9e35a5e](https://github.com/JOYCEQL/magic-resume/commit/9e35a5e))
- Реализована синхронизация файлов с debounce ([52d65ec](https://github.com/JOYCEQL/magic-resume/commit/52d65ec))
- Добавлены настраиваемые подписи ссылок проектов и отображение подписи пользовательских полей ([3f3e9a6](https://github.com/JOYCEQL/magic-resume/commit/3f3e9a6))
- Добавлены кликабельные ссылки для пользовательских полей в разделах `BaseInfo` ([475d9e2](https://github.com/JOYCEQL/magic-resume/commit/475d9e2))
- Обновлен ресурс screenshot для web-shot ([6eb7b34](https://github.com/JOYCEQL/magic-resume/commit/6eb7b34))
- Добавлен экспорт в Markdown ([2277da9](https://github.com/JOYCEQL/magic-resume/commit/2277da9))

### 🔥 Производительность

- Улучшен рендер `font-weight` ([d6e723d](https://github.com/JOYCEQL/magic-resume/commit/d6e723d))

### 🩹 Исправления

- Исправлен экспорт шрифтов ([b5468f6](https://github.com/JOYCEQL/magic-resume/commit/b5468f6))
- Исправлен `Wechat.jpg` ([6a74d8a](https://github.com/JOYCEQL/magic-resume/commit/6a74d8a))
- Удалены пустые абзацы после списков в rich text-контенте ([7111b3f](https://github.com/JOYCEQL/magic-resume/commit/7111b3f))
- Улучшено состояние `RichEditor` ([afb8f5d](https://github.com/JOYCEQL/magic-resume/commit/afb8f5d))
- Поля базовой информации выровнены по центру во всех шаблонах, код layout очищен ([9585b00](https://github.com/JOYCEQL/magic-resume/commit/9585b00))

### 💅 Рефакторинг

- Обновлен TipTap до v3, legacy-классы списков заменены на нативные CSS-стили ([99b4ae2](https://github.com/JOYCEQL/magic-resume/commit/99b4ae2))

### 📖 Документация

- Обновлена лицензия ([757030e](https://github.com/JOYCEQL/magic-resume/commit/757030e))
- Обновлен `Readme.md` ([b0f7827](https://github.com/JOYCEQL/magic-resume/commit/b0f7827))
- Обновлен WeChat ([70389bf](https://github.com/JOYCEQL/magic-resume/commit/70389bf))
- Обновлен `readme.md` ([f1f05da](https://github.com/JOYCEQL/magic-resume/commit/f1f05da))
- Обновлен WeChat ([042bb72](https://github.com/JOYCEQL/magic-resume/commit/042bb72))
- Обновлен `Readme.md` ([675f38d](https://github.com/JOYCEQL/magic-resume/commit/675f38d))
- Обновлен FAQ ([5c53ece](https://github.com/JOYCEQL/magic-resume/commit/5c53ece))
- В README добавлен раздел со спонсорами ([92e7a57](https://github.com/JOYCEQL/magic-resume/commit/92e7a57))

### 🏡 Служебные изменения

- Релиз `v2.0.4` ([cfe74e5](https://github.com/JOYCEQL/magic-resume/commit/cfe74e5))

### 🎨 Стили

- Улучшен превью раздела образования ([8d4aa02](https://github.com/JOYCEQL/magic-resume/commit/8d4aa02))
- Уменьшен `contentPadding` до `0` в конфигурации modern-шаблона ([342f1ba](https://github.com/JOYCEQL/magic-resume/commit/342f1ba))

### ❤️ Участники

- JOYCEQL <1449239013@qq.com>
- Siyue ([@JOYCEQL](https://github.com/JOYCEQL))
- Hanle <hanle200391@163.com>

## v2.0.4

[сравнить изменения](https://github.com/JOYCEQL/magic-resume/compare/v2.0.3...main)

### 🚀 Улучшения

- Добавлены сведения о лицензировании шрифтов ([4ecf99d](https://github.com/JOYCEQL/magic-resume/commit/4ecf99d))
- В rich text добавлена поддержка ссылок ([b6f01d9](https://github.com/JOYCEQL/magic-resume/commit/b6f01d9))
- Реализованы снапшоты шаблонов ([0ec010e](https://github.com/JOYCEQL/magic-resume/commit/0ec010e))
- Добавлены заранее сгенерированные снапшоты шаблонов ([fd76ba1](https://github.com/JOYCEQL/magic-resume/commit/fd76ba1))
- В `AIPolishDialog` добавлены пользовательские инструкции ([9d1d6c4](https://github.com/JOYCEQL/magic-resume/commit/9d1d6c4))
- Переработан выбор цвета темы в боковой панели ([78ccc3e](https://github.com/JOYCEQL/magic-resume/commit/78ccc3e))
- Добавлен FAQ ([1d936e4](https://github.com/JOYCEQL/magic-resume/commit/1d936e4))
- Добавлен новый шаблон резюме `Editorial` ([107a9d8](https://github.com/JOYCEQL/magic-resume/commit/107a9d8))
- Добавлен индикатор статуса резервного копирования ([9e35a5e](https://github.com/JOYCEQL/magic-resume/commit/9e35a5e))
- Реализована синхронизация файлов с debounce ([52d65ec](https://github.com/JOYCEQL/magic-resume/commit/52d65ec))
- Добавлены настраиваемые подписи ссылок проектов и отображение подписи пользовательских полей ([3f3e9a6](https://github.com/JOYCEQL/magic-resume/commit/3f3e9a6))
- Добавлены кликабельные ссылки для пользовательских полей в разделах `BaseInfo` ([475d9e2](https://github.com/JOYCEQL/magic-resume/commit/475d9e2))

### 🔥 Производительность

- Улучшен рендер `font-weight` ([d6e723d](https://github.com/JOYCEQL/magic-resume/commit/d6e723d))

### 🩹 Исправления

- Исправлен экспорт шрифтов ([b5468f6](https://github.com/JOYCEQL/magic-resume/commit/b5468f6))
- Исправлен `Wechat.jpg` ([6a74d8a](https://github.com/JOYCEQL/magic-resume/commit/6a74d8a))
- Удалены пустые абзацы после списков в rich text-контенте ([7111b3f](https://github.com/JOYCEQL/magic-resume/commit/7111b3f))
- Поля базовой информации выровнены по центру во всех шаблонах, форматирование layout-кода очищено ([c87d861](https://github.com/JOYCEQL/magic-resume/commit/c87d861))

### 💅 Рефакторинг

- Обновлен TipTap до v3, legacy-классы списков заменены на нативные CSS-стили ([99b4ae2](https://github.com/JOYCEQL/magic-resume/commit/99b4ae2))

### 📖 Документация

- Обновлена лицензия ([757030e](https://github.com/JOYCEQL/magic-resume/commit/757030e))
- Обновлен `Readme.md` ([b0f7827](https://github.com/JOYCEQL/magic-resume/commit/b0f7827))
- Обновлен WeChat ([70389bf](https://github.com/JOYCEQL/magic-resume/commit/70389bf))
- Обновлен `readme.md` ([f1f05da](https://github.com/JOYCEQL/magic-resume/commit/f1f05da))
- Обновлен WeChat ([042bb72](https://github.com/JOYCEQL/magic-resume/commit/042bb72))

### 🎨 Стили

- Улучшен превью раздела образования ([8d4aa02](https://github.com/JOYCEQL/magic-resume/commit/8d4aa02))

### ❤️ Участники

- JOYCEQL <1449239013@qq.com>
- Siyue ([@JOYCEQL](https://github.com/JOYCEQL))
- Hanle <hanle200391@163.com>

## v2.0.3

[сравнить изменения](https://github.com/JOYCEQL/magic-resume/compare/v2.0.2...main)

### 🚀 Улучшения

- Добавлен переключатель `To Present` для полей даты и диапазона дат, который отключает выбор конечной даты при активации ([023c9cb](https://github.com/JOYCEQL/magic-resume/commit/023c9cb))
- В modern-шаблон добавлен sidebar-layout, раздел образования перенесен, а стили, отступы и обрезка текста доработаны ([3330265](https://github.com/JOYCEQL/magic-resume/commit/3330265))
- Улучшена высота контента в modern-шаблоне ([dbddd4f](https://github.com/JOYCEQL/magic-resume/commit/dbddd4f))
- Добавлен раздел самооценки ([c5225a2](https://github.com/JOYCEQL/magic-resume/commit/c5225a2))
- Modern-шаблон переведен на табличный layout для фоновой печати ([dc9e547](https://github.com/JOYCEQL/magic-resume/commit/dc9e547))
- Добавлен раздел сертификатов с изображениями ([e870bd4](https://github.com/JOYCEQL/magic-resume/commit/e870bd4))
- Добавлены дополнительные настройки шрифтов ([a875349](https://github.com/JOYCEQL/magic-resume/commit/a875349))
- Добавлен экспорт шрифтов ([0a4dfd9](https://github.com/JOYCEQL/magic-resume/commit/0a4dfd9))
- Расширены настройки шрифтов ([395eda2](https://github.com/JOYCEQL/magic-resume/commit/395eda2))

### 🔥 Производительность

- В API routes и AI config store модель Gemini по умолчанию обновлена до `gemini-flash-latest` ([c62e983](https://github.com/JOYCEQL/magic-resume/commit/c62e983))

### 🩹 Исправления

- Исправлен export bar в `PreviewDock` ([dee081e](https://github.com/JOYCEQL/magic-resume/commit/dee081e))

### 💅 Рефакторинг

- Компоненты и утилиты страницы списка резюме вынесены в отдельные файлы ([f78518b](https://github.com/JOYCEQL/magic-resume/commit/f78518b))

### 📖 Документация

- Обновлен `readme.md`, добавлен WeChat ([620c3ab](https://github.com/JOYCEQL/magic-resume/commit/620c3ab))
- Добавлена WeChat-группа ([108b823](https://github.com/JOYCEQL/magic-resume/commit/108b823))

### 🎨 Стили

- Уменьшен верхний отступ у описаний и деталей в разных разделах шаблонов резюме ([84acbc8](https://github.com/JOYCEQL/magic-resume/commit/84acbc8))
- Из `Field` и его использования в `EducationItem` удалены проп `required` и индикатор звездочки ([b149f1a](https://github.com/JOYCEQL/magic-resume/commit/b149f1a))
- Оптимизирован UI шаблонов ([4628a39](https://github.com/JOYCEQL/magic-resume/commit/4628a39))

### ❤️ Участники

- JOYCEQL <1449239013@qq.com>
- Siyue ([@JOYCEQL](https://github.com/JOYCEQL))

## v2.0.2

[сравнить изменения](https://github.com/JOYCEQL/magic-resume/compare/v2.0.1...main)

### 🚀 Улучшения

- Реализовано создание пустого резюме и улучшено управление разделами за счет стандартных модулей и нового интерфейса добавления секций ([5c6dc7f](https://github.com/JOYCEQL/magic-resume/commit/5c6dc7f))
- Интегрирован Gemini API для импорта резюме, AI-полировки и AI-проверки грамматики ([7dda46a](https://github.com/JOYCEQL/magic-resume/commit/7dda46a))

### 📖 Документация

- В README добавлена контактная информация WeChat-группы и QR-код ([e3e8cec](https://github.com/JOYCEQL/magic-resume/commit/e3e8cec))

### 🏡 Служебные изменения

- Добавлен новый post-bump script ([0a9d71b](https://github.com/JOYCEQL/magic-resume/commit/0a9d71b))

### 🤖 CI

- Добавлен GitHub Actions workflow для автоматических релизов и обновлена версия changelog ([34ff7ba](https://github.com/JOYCEQL/magic-resume/commit/34ff7ba))
- Bumpp и релиз ([950a328](https://github.com/JOYCEQL/magic-resume/commit/950a328))

### ❤️ Участники

- JOYCEQL <1449239013@qq.com>

## v2.0.1

[сравнить изменения](https://github.com/JOYCEQL/magic-resume/compare/v2.0.1...main)

### 🚀 Улучшения

- Реализовано модальное окно создания резюме с выбором и предпросмотром шаблонов ([accd34d](https://github.com/JOYCEQL/magic-resume/commit/accd34d))

### 🩹 Исправления

- Для разделов `BaseInfo` в creative- и modern-шаблонах задан белый цвет текста ([86d5c55](https://github.com/JOYCEQL/magic-resume/commit/86d5c55))

### 🏡 Служебные изменения

- Обновлена версия через Bumpp ([0d05715](https://github.com/JOYCEQL/magic-resume/commit/0d05715))
- В Bumpp добавлены все конфиги ([9d43c60](https://github.com/JOYCEQL/magic-resume/commit/9d43c60))

### 🎨 Стили

- Улучшен UI карточек шаблонов на dashboard ([4ba25d6](https://github.com/JOYCEQL/magic-resume/commit/4ba25d6))

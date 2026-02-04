# Наталья Ерёменко — сайт нутрициолога

Персональный сайт нутрициолога-биохакера Натальи Ерёменко. Построен на Astro 5 с Tailwind CSS 4, TypeScript, MDX и React.

## Технологии

- **Astro 5** — статическая генерация
- **Tailwind CSS 4** — стилизация через `@tailwindcss/vite`
- **TypeScript** — строгий режим
- **MDX** — контент программ и блога
- **React** — интерактивные компоненты (фильтр программ, форма консультации)
- **Vercel** — деплой

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview
```

## Структура проекта

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, CTA, Myths и др.
│   ├── programs/        # ProgramFilter (React)
│   └── forms/           # ConsultationForm (React)
├── content/
│   ├── programs/        # MDX-файлы программ (20 шт.)
│   └── blog/            # MDX-статьи блога (3 шт.)
├── data/
│   └── cases.ts         # Данные кейсов
├── layouts/
│   ├── BaseLayout.astro
│   ├── PageLayout.astro
│   └── ProgramLayout.astro
├── pages/
│   ├── index.astro      # Главная
│   ├── about.astro      # Об эксперте
│   ├── cases.astro      # Кейсы
│   ├── consultation.astro # Консультация
│   ├── contacts.astro   # Контакты
│   ├── programs/        # Каталог и страницы программ
│   └── blog/            # Блог
├── styles/
│   └── global.css       # Tailwind 4 тема, шрифты
└── content.config.ts    # Схемы коллекций
```

## Добавление программы

1. Создайте файл `src/content/programs/название.mdx`
2. Заполните frontmatter по схеме (см. `content.config.ts`):

```yaml
---
title: "Название программы"
description: "Описание"
category: "weight" # weight|energy|stress|immunity|detox|beauty|sleep|kids|other
duration: "30 дней"
price: "5 000 ₽"
forWhom: ["Для кого 1", "Для кого 2"]
includes: ["Что входит 1", "Что входит 2"]
products: ["Продукт 1", "Продукт 2"]
results: ["Результат 1", "Результат 2"]
featured: false
order: 21
---
```

3. Напишите описание программы в формате MDX.

## Добавление статьи в блог

1. Создайте файл `src/content/blog/название.mdx`
2. Заполните frontmatter:

```yaml
---
title: "Заголовок статьи"
description: "Краткое описание"
date: 2025-03-01
tags: ["тег1", "тег2"]
---
```

3. Напишите текст статьи.

## Перед запуском в продакшен

Замените следующие значения:

- **`https://example.com`** → ваш реальный домен (в `astro.config.mjs`, `robots.txt`, `index.astro` JSON-LD)
- **Фото-заглушки** → реальные фотографии Натальи (Hero.astro, about.astro)
- **Номер WhatsApp** → актуальный номер (если изменился)
- **Ссылки на соцсети** → актуальные ссылки Instagram/Telegram

## Деплой на Vercel

1. Подключите репозиторий к Vercel
2. Framework Preset: **Astro**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Деплой произойдёт автоматически

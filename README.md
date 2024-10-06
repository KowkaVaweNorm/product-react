# Прочтение, написание, обсуждение статей на различную тематику

Статьи, комментарии, аутентификация пользователя,
покрытие тестами, в том числе покрытие storybook.
Интернационализация, темизация(доступны 3 темы), свой ui-кит
Скоро будет доступно два дизайна для админа

## Ссылки

- Логин: `user`, пароль: `123`
- [Сайт (последняя сборка)](https://kowka-app.netlify.app/)
- [Chromatic (скришотные тесты)](https://www.chromatic.com/library?appId=6690d3546f3d377867d91626)
- [Storybook (онлайн версия)](https://6690d3546f3d377867d91626-txilkssvge.chromatic.com/?path=/story/entities-article-articledetails--light)
- [Отчёты (тесты, размер бандла и тд)](https://kowkavawenorm.github.io/product-react))
## Команды скриптов

```bash
npm run start:dev       // Запуск в дев режиме (клиента + мок сервера)

npm run sb        // Запуск storybook
```

### Технологический стек

```
TypeScript
React:
Redux-toolkit + RTK Query,DynamicModuleLoader
i18n - доступен перевод на английский
SCSS
Webpack
Jest - unit тесты
RTL - тесты компонентов
Storybook
Chromatic - скриншотное тестирование
ESLint
Stylelint
json-server - для мока серверных данных
husky - для прекоммит проверки(тесты на машине разработчика)
github-actions - CI тесты на коммит
Feature-sliced-design - Архитектура проекта
```

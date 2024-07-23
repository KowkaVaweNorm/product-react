# Сайт с статьями и комментариями

Статьи, комментарии, аутентификация пользователя,
покрытие тестами, в том числе покрытие storybook.
Интернационализация, темизация(доступны 3 темы), свой ui-кит


## Ссылки

- Логин: `user`, пароль: `123`
- [Сайт (последняя сборка)](https://master--kowka-app.netlify.app/)
- [Chromatic (скришотные тесты)](https://www.chromatic.com/library?appId=6690d3546f3d377867d91626)
- [Storybook (онлайн версия)](https://6690d3546f3d377867d91626-txilkssvge.chromatic.com/?path=/story/entities-article-articledetails--light)

## Команды скриптов

```bash
npm run start:dev       // Запуск в дев режиме (клиента + мок сервера)

npm run sb        // Запуск storybook 
```
### Технологический стек
```
TypeScript
React:
Redux-toolkit + RTK
i18n - доступен перевод на английский
SCSS 
Webpack
Jest - unit тесты
RTL - тесты компонентов
Storybook 
Lost-pixel - скриншотное тестирование 
ESLint
json-server - для мока серверных данных
husky - для прекоммит проверки(тесты на машине разработчика)
github-actions - CI тесты на коммит
Feature-sliced-design - Архитектура проекта
```

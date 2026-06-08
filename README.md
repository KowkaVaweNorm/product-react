# Reading, Writing, and Discussing Articles on Various Topics

Features: articles, comments, user authentication, test coverage (including Storybook), internationalization, theming (3 themes available), custom UI kit. Two admin designs coming soon.

## Links

- Login: `user`, Password: `123`
- [Site (latest build, server wake-up may take 3-5 minutes)](https://kowka-app.netlify.app/)
- [Chromatic (visual regression tests)](https://www.chromatic.com/library?appId=6690d3546f3d377867d91626)
- [Storybook (online)](https://6690d3546f3d377867d91626-txilkssvge.chromatic.com/?path=/story/entities-article-articledetails--light)
- [Reports (tests, bundle size, etc.)](https://kowkavawenorm.github.io/product-react)

## Scripts

```bash
npm run start:dev       # Dev mode (client + mock server)
npm run sb              # Start Storybook
```

### Tech Stack

```
TypeScript
React
Redux Toolkit + RTK Query, DynamicModuleLoader
i18n (English translation available)
SCSS
Webpack
Jest (unit tests)
React Testing Library (component tests)
Storybook
Chromatic (visual testing)
ESLint
Stylelint
json-server (mock API)
Husky (pre-commit hooks)
GitHub Actions (CI on commit)
Feature-Sliced Design (project architecture)
```

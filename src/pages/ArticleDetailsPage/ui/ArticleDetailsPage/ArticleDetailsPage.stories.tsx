/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/type/article';
const meta: Meta<typeof ArticleDetailsPage> = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>

export const Light: Story = {
  decorators: [
    (Story) => (
      StoreDecorator({
        articleDetails: {
          data: article
        },
        articleDetailsPage: {
          comments
        }
      })(Story)
    )
  ],
  render: () => <ArticleDetailsPage />
};

const article = {
  id: '1',
  title: 'Javascript news СВЕЖАЯ',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
  views: 1022,
  createdAt: '26.04.2022',
  userId: '1',
  type: [
    ArticleType.IT
  ],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Вступление',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Второе вступление',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта'
    },
    {
      id: '3',
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    },
    {
      id: '7',
      type: ArticleBlockType.TEXT,
      title: 'Что такое js',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '8',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта'
    },
    {
      id: '9',
      type: ArticleBlockType.TEXT,
      title: 'Конкретно',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.'
      ]
    }
  ]
};

const comments = {
  ids: [
    '1',
    '2',
    '3',
    '4Cljjzl',
    'AEM4Dvc',
    'IFEOWl0',
    'dBacYRZ',
    'rBX_C-e',
    '5k0ApX-',
    'w-HDIRq',
    'MVvGQoZ',
    'fta748h',
    'bq8YXY2',
    'lTD5sA7',
    'HmqI2nF',
    'mAW5eR7',
    '2NMyhEj',
    'XTAMXxm',
    'DpyA7O6',
    'E_93tx0',
    'O0Vlbwq'
  ],
  entities: {
    1: {
      id: '1',
      text: 'Статья топ',
      articleId: '1',
      userId: '1',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    2: {
      id: '2',
      text: 'Кто это сделал??????',
      articleId: '1',
      userId: '1',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    3: {
      id: '3',
      text: 'some comment 3',
      articleId: '1',
      userId: '1',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    '4Cljjzl': {
      articleId: '1',
      userId: '1',
      text: '123',
      id: '4Cljjzl',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    AEM4Dvc: {
      articleId: '1',
      userId: '1',
      text: '123asfasf',
      id: 'AEM4Dvc',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    IFEOWl0: {
      articleId: '1',
      userId: '2',
      text: '123asfasf',
      id: 'IFEOWl0',
      user: {
        id: '2',
        username: 'user',
        password: '123',
        roles: [
          'USER'
        ],
        features: {
          isArticleRatingEnabled: false,
          isCounterEnabled: false,
          isAppRedesigned: false
        },
        avatar: 'https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    dBacYRZ: {
      articleId: '1',
      userId: '2',
      text: 'привет мир',
      id: 'dBacYRZ',
      user: {
        id: '2',
        username: 'user',
        password: '123',
        roles: [
          'USER'
        ],
        features: {
          isArticleRatingEnabled: false,
          isCounterEnabled: false,
          isAppRedesigned: false
        },
        avatar: 'https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    'rBX_C-e': {
      articleId: '1',
      userId: '2',
      text: 'хехехехе',
      id: 'rBX_C-e',
      user: {
        id: '2',
        username: 'user',
        password: '123',
        roles: [
          'USER'
        ],
        features: {
          isArticleRatingEnabled: false,
          isCounterEnabled: false,
          isAppRedesigned: false
        },
        avatar: 'https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    '5k0ApX-': {
      articleId: '1',
      userId: '2',
      text: 'фыафыа',
      id: '5k0ApX-',
      user: {
        id: '2',
        username: 'user',
        password: '123',
        roles: [
          'USER'
        ],
        features: {
          isArticleRatingEnabled: false,
          isCounterEnabled: false,
          isAppRedesigned: false
        },
        avatar: 'https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    'w-HDIRq': {
      articleId: '1',
      userId: '2',
      text: 'sdfsdfsd',
      id: 'w-HDIRq',
      user: {
        id: '2',
        username: 'user',
        password: '123',
        roles: [
          'USER'
        ],
        features: {
          isArticleRatingEnabled: false,
          isCounterEnabled: false,
          isAppRedesigned: false
        },
        avatar: 'https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    MVvGQoZ: {
      articleId: '1',
      userId: '2',
      text: 'asdasdasd',
      id: 'MVvGQoZ',
      user: {
        id: '2',
        username: 'user',
        password: '123',
        roles: [
          'USER'
        ],
        features: {
          isArticleRatingEnabled: false,
          isCounterEnabled: false,
          isAppRedesigned: false
        },
        avatar: 'https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    fta748h: {
      articleId: '1',
      userId: '2',
      text: 'privet',
      id: 'fta748h',
      user: {
        id: '2',
        username: 'user',
        password: '123',
        roles: [
          'USER'
        ],
        features: {
          isArticleRatingEnabled: false,
          isCounterEnabled: false,
          isAppRedesigned: false
        },
        avatar: 'https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    bq8YXY2: {
      articleId: '1',
      userId: '2',
      text: '213',
      id: 'bq8YXY2',
      user: {
        id: '2',
        username: 'user',
        password: '123',
        roles: [
          'USER'
        ],
        features: {
          isArticleRatingEnabled: false,
          isCounterEnabled: false,
          isAppRedesigned: false
        },
        avatar: 'https://i.pinimg.com/originals/9a/e0/2d/9ae02d4b4288396108ef77830a59e060.jpg',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    lTD5sA7: {
      articleId: '1',
      userId: '1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores dolorum eaque eius excepturi expedita     ipsa nam, quos rem rerum voluptas voluptate voluptatem? Dicta distinctio dolore explicabo labore magni sit!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolores dolorum eaque eius excepturi expedita     ipsa nam, quos rem rerum voluptas voluptate voluptatem? Dicta distinctio dolore explicabo labore magni sit!',
      id: 'lTD5sA7',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    HmqI2nF: {
      articleId: '1',
      userId: '1',
      text: 'Добавляю текст комментария',
      id: 'HmqI2nF',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    mAW5eR7: {
      articleId: '1',
      userId: '1',
      text: 'тестирую второй раз комментарии',
      id: 'mAW5eR7',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    '2NMyhEj': {
      articleId: '1',
      userId: '1',
      text: 'Тестирую третий раз комментарии',
      id: '2NMyhEj',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    XTAMXxm: {
      articleId: '1',
      userId: '1',
      text: 'тестирую четвертый раз комментарии',
      id: 'XTAMXxm',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    DpyA7O6: {
      articleId: '1',
      userId: '1',
      text: 'кто это написал?',
      id: 'DpyA7O6',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    E_93tx0: {
      articleId: '1',
      userId: '1',
      text: 'Хорошая статья, но не понятно для кого',
      id: 'E_93tx0',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    },
    O0Vlbwq: {
      articleId: '1',
      userId: '1',
      text: 'addd',
      id: 'O0Vlbwq',
      user: {
        id: '1',
        username: 'admin',
        password: '123',
        roles: [
          'ADMIN'
        ],
        features: {
          isArticleRatingEnabled: true,
          isCounterEnabled: true,
          isAppRedesigned: true
        },
        avatar: 'https://mobimg.b-cdn.net/v3/fetch/22/2207633df03a819cd72889249c8361a8.jpeg?w=1470&r=0.5625',
        jsonSettings: {
          isArticlesPageWasOpened: true,
          theme: 'app_dark_theme'
        }
      }
    }
  },
  isLoading: false
};

export const Dark: Story = {
  decorators: [
    (Story) => (
      ThemeDecorator(Theme.DARK)(Story)
    ),
    (Story) => (
      StoreDecorator({
        articleDetails: {
          data: article
        },
        articleDetailsPage: {
          comments
        }
      })(Story)
    )
  ],
  render: () => <ArticleDetailsPage />
};

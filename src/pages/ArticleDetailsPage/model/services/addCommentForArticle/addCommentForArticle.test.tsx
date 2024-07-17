import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';
import { ArticleBlockType, ArticleType } from '@/entities/Article/model/type/article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

jest.mock('../fetchCommentsByArticleId/fetchCommentsByArticleId');

describe('addCommentForArticle(asyncThunk)', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: '1',
          username: 'kowka',
          avatar: ''
        },
        _inited: false
      },
      articleDetails: {
        data: {
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
          user: {
            id: '1',
            username: 'kowka'
          },
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
        },
        isLoading: false,
        error: undefined
      }
    }
    );
    const returnedValue = {
      articleId: '1',
      userId: '1',
      text: 'addd',
      id: 'O0Vlbwq1'
    };
    thunk.api.post.mockResolvedValue(Promise.resolve({ data: returnedValue }));
    const result = await thunk.callThunk('comment');

    // Проверяем статус фанка
    expect(result.meta.requestStatus).toBe('fulfilled');

    // Проверяем данные которые вернулись с теми которые замокали в апи выше
    expect(result.payload).toBe(returnedValue);

    // проверем что вызвался api.post
    expect(thunk.api.post).toHaveBeenCalled();

    // Проверяем что вызвался диспатч
    expect(thunk.dispatch).toHaveBeenCalled();

    // Проверяем что сервис внутри фанка вызвался
    expect(fetchCommentsByArticleId).toHaveBeenCalled();

    // Проверяем что сервис внутри фанка вызвался с нужным аргументом
    expect(fetchCommentsByArticleId).toHaveBeenCalledWith('1');

    // Проверяем что диспатч вызвался три раза(вызов фанка, вызов внутри диспатча, вызов return )
    expect(thunk.dispatch).toBeCalledTimes(3);
  });

  test('reject with no data in store', async () => {
    // empty store
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: undefined
      }
    });
    const returnedValue = {
      articleId: '1',
      userId: '1',
      text: 'addd',
      id: 'O0Vlbwq1'
    };
    // Не должно вызваться т.к. ошибка будет раньше
    thunk.api.post.mockResolvedValue(Promise.resolve({ data: returnedValue }));
    const result = await thunk.callThunk('comment');

    // Проверяем статус фанка
    expect(result.meta.requestStatus).toBe('rejected');

    // Проверяем данные которые вернулись с теми которые замокали в апи выше
    expect(result.payload).toBe('no data');

    // проверем что вызвался api.post
    expect(thunk.api.post).not.toHaveBeenCalled();

    // Проверяем что вызвался диспатч
    expect(thunk.dispatch).toHaveBeenCalled();

    // Проверяем что диспатч вызвался 2 раза(вызов фанка, вызов rejectWithValue )
    expect(thunk.dispatch).toBeCalledTimes(2);

    // Проверяем что сервис внутри фанка вызвался
    expect(fetchCommentsByArticleId).not.toHaveBeenCalled();
  });

  test('reject with no data from api', async () => {
    // empty store
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: '1',
          username: 'kowka',
          avatar: ''
        },
        _inited: false
      },
      articleDetails: {
        data: {
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
          user: {
            id: '1',
            username: 'kowka'
          },
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
        },
        isLoading: false,
        error: undefined
      }
    });
    // Не должно вызваться т.к. ошибка будет раньше
    thunk
      .api
      .post
      .mockReturnValue(
        Promise.resolve({ status: 500 })
      );
    const result = await thunk.callThunk('comment');
    // Проверяем статус фанка
    expect(result.meta.requestStatus).toBe('rejected');

    // Проверяем данные которые вернулись с теми которые замокали в апи выше
    expect(result.payload).toBe('error');

    // проверем что вызвался api.post
    expect(thunk.api.post).toHaveBeenCalled();

    // Проверяем что вызвался диспатч
    expect(thunk.dispatch).toHaveBeenCalled();

    // Проверяем что диспатч вызвался 2 раза(вызов фанка, вызов rejectWithValue )
    expect(thunk.dispatch).toBeCalledTimes(2);

    // Проверяем что сервис внутри фанка вызвался
    expect(fetchCommentsByArticleId).not.toHaveBeenCalled();
  });
});

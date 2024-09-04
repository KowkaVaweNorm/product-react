import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { type ArticleType, type ArticleBlockType } from '../../..';

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  decorators: [
    (Story: StoryFn) => (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card style={{ margin: '20px auto', maxWidth: '1000px' }} border="partial" padding="24">
            <Story />
          </Card>
        }
        off={<Story />}
      />
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
  decorators: [
    (Story: any) =>
      StoreDecorator({
        articleDetails: {
          data: {
            id: '1',
            title: 'Javascript news СВЕЖАЯ',
            subtitle: 'Что нового в JS за 2022 год?',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
            views: 1022,
            createdAt: '26.04.2022',
            userId: '1',
            type: ['IT' as ArticleType],
            blocks: [
              {
                id: '1',
                type: 'TEXT' as ArticleBlockType,
                title: 'Заголовок этого блока',
                paragraphs: [
                  'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                  'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                  'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
              },
              {
                id: '4',
                type: 'CODE' as ArticleBlockType,
                code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
              },
              {
                id: '5',
                type: 'TEXT' as ArticleBlockType,
                title: 'Заголовок этого блока',
                paragraphs: [
                  'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                  'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
              },
              {
                id: '2',
                type: 'IMAGE' as ArticleBlockType,
                src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                title: 'Рисунок 1 - скриншот сайта',
              },
              {
                id: '3',
                type: 'CODE' as ArticleBlockType,
                code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
              },
              {
                id: '7',
                type: 'TEXT' as ArticleBlockType,
                title: 'Заголовок этого блока',
                paragraphs: [
                  'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                  'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
              },
              {
                id: '8',
                type: 'IMAGE' as ArticleBlockType,
                src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                title: 'Рисунок 1 - скриншот сайта',
              },
              {
                id: '9',
                type: 'TEXT' as ArticleBlockType,
                title: 'Заголовок этого блока',
                paragraphs: [
                  'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                ],
              },
            ],
          },
        },
      })(Story),
  ],
  render: () => <ArticleDetails id="2" />,
};
export const PrimaryLoading: Story = {
  decorators: [
    (Story: any) =>
      StoreDecorator({
        articleDetails: {
          data: undefined,
          isLoading: true,
        },
      })(Story),
  ],
  render: () => <ArticleDetails id="2" />,
};

export const PrimaryError: Story = {
  decorators: [
    (Story: any) =>
      StoreDecorator({
        articleDetails: {
          data: undefined,
          isLoading: false,
          error: 'Не удалось загрузить статью',
        },
      })(Story),
  ],
  render: () => <ArticleDetails id="2" />,
};

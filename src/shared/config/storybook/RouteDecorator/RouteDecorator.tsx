import { type StoryFn } from '@storybook/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

// eslint-disable-next-line react/display-name
export const RouteDecorator = (StoryComponent: StoryFn, { parameters }: any): JSX.Element => {
  const { route = '/', path = '/' } = parameters;

  // window.history.pushState({}, 'Test page', route);

  return (
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path={path} element={<StoryComponent />} />
      </Routes>
    </MemoryRouter>
  );
};

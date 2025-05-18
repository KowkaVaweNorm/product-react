/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('classNames', () => {
  test('with only first param', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('with only first param and Theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});

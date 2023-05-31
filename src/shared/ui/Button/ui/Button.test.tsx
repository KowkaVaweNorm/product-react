import { render, screen } from "@testing-library/react"
import { Button, ThemeButton } from "./Button"


describe('classNames', () => {
  
  test('with only first param', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  })
  
  test('with only first param and Theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  })


})
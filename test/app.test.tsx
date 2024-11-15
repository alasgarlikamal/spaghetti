import { render, screen } from '@testing-library/react';
import App from '@/App';
import userEvent from '@testing-library/user-event';

test('App should be rendered', () => {
  expect.assertions(0);
  render(<App />);
});

test('counter should increment when clicked', async () => {
  render(<App />);

  const user = userEvent.setup();
  const button = screen.getByTestId('increment-button');

  expect(button).toHaveTextContent('0');
  await user.click(button);
  expect(button).toHaveTextContent('1');
});

import React from 'react';
import { render } from './test-utils';
import App from './App';

test('renders App and matches previous snapshot', () => {
  const { container } = render(<App />);
  expect(container.innerHTML).toMatchSnapshot();
});

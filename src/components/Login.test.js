import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { render } from '../test-utils';
import Login from './Login';

describe('Login component', () => {
  test('user id input changes', () => {
    render(<Login />);
    const userNameInput = screen.getByLabelText('userId');
    fireEvent.change(userNameInput, { target: { value: 'sarahedo' } });
    expect(userNameInput.value).toBe('sarahedo');
  });

  test('user id password changes', () => {
    render(<Login />);
    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toBe('password123');
  });
});

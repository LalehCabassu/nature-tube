import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CancelButton from './CancelButton';

describe('<CancelButton />', () => {
  test('it should mount', () => {
    render(<CancelButton onClick={() => {}} />);
    
    const button = screen.getByTestId('CancelButton');

    expect(button).toBeInTheDocument();
  });
});
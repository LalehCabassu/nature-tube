import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pick from './Pick';

describe('<Pick />', () => {
    test('it should mount', () => {
        render(<Pick/>);

        const pick = screen.getByTestId('Pick');

        expect(pick).toBeInTheDocument();
    });
});
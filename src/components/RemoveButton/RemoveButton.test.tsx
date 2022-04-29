import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RemoveButton from './RemoveButton';

describe('<RemoveButton />', () => {
    test('it should mount', () => {
        render(<RemoveButton onClick={() => {
        }}/>);

        const button = screen.getByTestId('RemoveButton');

        expect(button).toBeInTheDocument();
    });
});
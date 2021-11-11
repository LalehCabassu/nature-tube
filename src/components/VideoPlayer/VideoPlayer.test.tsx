import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VideoPlayer from './VideoPlayer';

describe('<TestComponent />', () => {
    test('it should mount', () => {
        render(<VideoPlayer/>);

        const testComponent = screen.getByTestId('TestComponent');

        expect(testComponent).toBeInTheDocument();
    });
});
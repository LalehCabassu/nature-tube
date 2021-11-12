import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VideoPlayer from './VideoPlayer';

const uri = "http://data.phys.ucalgary.ca/sort_by_project/AuroraMAX/rt-movies/mp4/2021/11/04/auroramaxHD_20211104_720p.mp4";

describe('<TestComponent />', () => {
    test('it should mount', () => {
        render(<VideoPlayer uri={uri} />);

        const testComponent = screen.getByTestId('TestComponent');

        expect(testComponent).toBeInTheDocument();
    });
});
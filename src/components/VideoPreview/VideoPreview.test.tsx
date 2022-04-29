import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VideoPreview from './VideoPreview';
import {ElementSize} from "../../utils/ElementSize";

describe('<VideoPreview />', () => {
    test('it should mount', () => {
        render(<VideoPreview id='' size={ElementSize.Small} uri='' title='' onRemove={() => {
        }}/>);

        const videoPreview = screen.getByTestId('VideoPreview');

        expect(videoPreview).toBeInTheDocument();
    });
});
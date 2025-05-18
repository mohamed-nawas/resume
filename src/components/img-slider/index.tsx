import * as React from 'react';
import ImgSliderUI from './ui';

const ImgSlider: React.FC<ImgSliderProps> = ({ data }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    return (
        <ImgSliderUI containerRef={containerRef} data={data} />
    );
}

export default ImgSlider;
import * as React from 'react';
import SliderUI from './ui';

const Slider: React.FC<SliderProps> = ({ sliderTitle, swiperClassName, sliderBtnText, 
    data }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    return (
        <SliderUI containerRef={containerRef} sliderTitle={sliderTitle} 
        swiperClassName={swiperClassName} sliderBtnText={sliderBtnText} data={data} />
    );
}

export default Slider;
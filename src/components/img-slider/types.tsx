interface ImgSliderProps {
    data: ImgProps[];
}

interface ImgSliderUIProps {
    containerRef: React.RefObject<HTMLDivElement>;
    data: ImgProps[];
}

interface ImgProps {
    src: string;
    alt: string;
}
interface WorksProps {
    title: string;
    slug: string;
    items: WorkItems[][];
}

interface WorksUIProps {
    containerRef: React.RefObject<HTMLDivElement>;
    title: string;
    slug: string;
    items: WorkItems[][];
}

interface WorkItems {
    id: string;
    title: string;
    mainImgPath: string;
    subImgsPath: string[];
    imgAlt: string;
}
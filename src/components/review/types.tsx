interface ReviewProps {
    title: string;
    slug: string;
    count: string;
}

interface ReviewUIProps {
    containerRef: React.RefObject<HTMLDivElement>;
    title: string;
    slug: string;
    count: string;
}
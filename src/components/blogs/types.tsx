interface BlogsProps {
    blogs: Blog[];
}

interface BlogsUIProps {
    containerRef: React.RefObject<HTMLDivElement>;
    blogs: Blog[];
}

interface Blog {
    id: number;
    title: string;
    description: string;
    cover_image: string | null;
}
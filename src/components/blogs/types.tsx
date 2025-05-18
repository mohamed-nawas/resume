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

interface BlogFull {
    id: number;
    title: string;
    body_html: string;
    tag_list: string[];
    cover_image: string | null;
    url: string;
    published_at: string;
}
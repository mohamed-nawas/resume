interface BannerProps {
    children: React.ReactNode;
    iconPath: string;
    iconAlt: string;
    contentTitle: string;
    contentSlug: string;
}

interface BannerUIProps {
    containerRef: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
    iconPath: string;
    iconAlt: string;
    contentTitle: string;
    contentSlug: string;
}
import * as React from 'react';
import BannerUI from './ui';

const Banner: React.FC<BannerProps> = ({ children, iconPath, iconAlt, contentTitle, 
    contentSlug }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    return (
        <BannerUI containerRef={containerRef} iconPath={iconPath} iconAlt={iconAlt} 
        contentTitle={contentTitle} contentSlug={contentSlug}>{children}</BannerUI>
    );
}

export default Banner;
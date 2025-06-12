import * as React from 'react';

const BannerUI: React.FC<BannerUIProps> = ({ containerRef, children, iconPath, iconAlt, contentTitle, contentSlug }) => {
    return (
        <div ref={containerRef} className="rss-banner">
            <img src={iconPath} alt={iconAlt} className="rss-banner__ico" />
            <div className="rss-banner__content">
                <h2 className="rss-banner__content__title font-28-48">{contentTitle}</h2>
                <p className="rss-banner__content__slug font-14-20">{contentSlug}</p>
            </div>
            {children}
        </div>
    );
};

export default BannerUI;
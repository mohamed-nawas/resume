import * as React from 'react';
import WorksUI from './ui';

const Works: React.FC<WorksProps> = ({ baseClassName, swiperBaseClassName, title, slug, items }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    return (
        <WorksUI containerRef={containerRef} baseClassName={baseClassName} swiperBaseClassName={swiperBaseClassName} title={title} slug={slug} items={items} />
    );
}

export default Works;
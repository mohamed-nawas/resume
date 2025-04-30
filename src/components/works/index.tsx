import * as React from 'react';
import WorksUI from './ui';

const Works: React.FC<WorksProps> = ({ title, slug, items }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    return (
        <WorksUI containerRef={containerRef} title={title} slug={slug} items={items} />
    );
}

export default Works;
import * as React from 'react';
import WorksUI from './ui';

const Works: React.FC<WorksProps> = ({ title, slug }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    return (
        <WorksUI containerRef={containerRef} title={title} slug={slug} />
    );
}

export default Works;
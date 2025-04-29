import * as React from 'react';
import ReviewUI from './ui';

const Review: React.FC<ReviewProps> = ({ title, slug, count }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    return (
        <ReviewUI containerRef={containerRef} title={title} slug={slug} count={count} />
    );
}

export default Review;
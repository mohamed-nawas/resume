import * as React from 'react';
import BlogsUI from './ui';

const Blogs: React.FC<BlogsProps> = (props) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    return (
        <BlogsUI containerRef={containerRef} blogs={props.blogs} />
    );
}

export default Blogs;
import * as React from 'react';
import FAQUI from './ui';

const FAQ: React.FC<FAQProps> = ({ baseClassName,title, slug, containerHelpIconPath, containerHelpIconAlt, 
    containerHelpTextTitle, containerHelpTextSlug, containerHelpBtnValue }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    return (
        <FAQUI containerRef={containerRef} baseClassName={baseClassName} title={title} slug={slug} 
        containerHelpIconPath={containerHelpIconPath} 
        containerHelpIconAlt={containerHelpIconAlt} 
        containerHelpTextTitle={containerHelpTextTitle} 
        containerHelpTextSlug={containerHelpTextSlug} 
        containerHelpBtnValue={containerHelpBtnValue} />
    );
}

export default FAQ;
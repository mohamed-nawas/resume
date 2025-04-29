import * as React from 'react';
import FAQUI from './ui';

const FAQ: React.FC<FAQProps> = ({ title, slug, containerHelpIconPath, containerHelpIconAlt, containerHelpTextTitle, containerHelpTextSlug, containerHelpBtnValue }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    return (
        <FAQUI containerRef={containerRef} title={title} slug={slug} containerHelpIconPath={containerHelpIconPath} containerHelpIconAlt={containerHelpIconAlt} containerHelpTextTitle={containerHelpTextTitle} containerHelpTextSlug={containerHelpTextSlug} containerHelpBtnValue={containerHelpBtnValue} />
    );
}

export default FAQ;
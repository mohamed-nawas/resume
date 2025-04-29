interface FAQProps {
    title: string;
    slug: string;
    containerHelpIconPath: string;
    containerHelpIconAlt: string;
    containerHelpTextTitle: string;
    containerHelpTextSlug: string;
    containerHelpBtnValue: string;
}

interface FAQUIProps {
    containerRef: React.RefObject<HTMLDivElement>;
    title: string;
    slug: string;
    containerHelpIconPath: string;
    containerHelpIconAlt: string;
    containerHelpTextTitle: string;
    containerHelpTextSlug: string;
    containerHelpBtnValue: string;
}
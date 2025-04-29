export const items = process.env.NODE_ENV === "production" ? [
    { icon: `${import.meta.env.BASE_URL}/icons/tick-ico.png`, alt: "Icon", text: "55+ Completed Projects" },
    { icon: `${import.meta.env.BASE_URL}/icons/peoples-ico.png`, alt: "Icon", text: "20+ Happy Customers" },
    { icon: `${import.meta.env.BASE_URL}/icons/chart-ico.png`, alt: "Icon", text: "08+ Years of Experience" },
] : [
    { icon: 'icons/tick-ico.png', alt: "Icon", text: "55+ Completed Projects" },
    { icon: 'icons/peoples-ico.png', alt: "Icon", text: "20+ Happy Customers" },
    { icon: 'icons/chart-ico.png', alt: "Icon", text: "08+ Years of Experience" },
]
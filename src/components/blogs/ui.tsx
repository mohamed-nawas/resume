import * as React from 'react';
import BlogsSwiper from '../../slider-scripts/BlogsSwiper';

const BlogsUI: React.FC<BlogsUIProps> = ({ containerRef, blogs }) => {
    return (
        <div ref={containerRef} className="rss-blogs">
            <h3 className="rss-blogs__title font-28-48">Blogs</h3>
            <BlogsSwiper>
                <div className="swiper-wrapper rss-blogs__items-container">
                    {blogs.map((item) => (
                        <div className="swiper-slide rss-blogs__items-container__item" key={item.id}>
                            <div className="rss-blogs__items-container__item__img-container">
                                <img
                                    src={item.cover_image ? item.cover_image : 'images/order-uk-1.png'} alt={item.title} className="rss-blogs__items-container__item__img-container__img" />
                            </div>
                            <div className="rss-blogs__items-container__item__content">
                                <h4 className="rss-blogs__items-container__item__content__title font-16-20">{item.title}</h4>
                                <p className="rss-blogs__items-container__item__content__description font-14-18">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </BlogsSwiper>
        </div>
    );
};

export default BlogsUI;
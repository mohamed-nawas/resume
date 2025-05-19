import { useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Blogs from "./data";

function BlogDetail() {
    const location = useLocation();
    const idParam = location.search.startsWith('?') ? location.search.slice(1) : location.search;
    const id = idParam ? Number(idParam) : null;
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = import.meta.env.BASE_URL;

    const blog = id !== null && !isNaN(id) ? Blogs[id] : null;
    return (
        <>
            <Header />
            <section className="rss-blog-detail">
                <div className="container-fluid">
                    <div className="rss-blog-detail__container">
                        <div className="rss-blog-detail__container__tags-container">
                            {blog ? blog.tag_list.map((tag, index) => (
                                <div key={index} className="rss-blog-detail__container__tags-container__item">
                                    <p className="rss-blog-detail__container__tags-container__item__tag font-12-16">{tag}</p>
                                </div>
                            )) : null}
                        </div>
                        <h6 className="rss-blog-detail__container__date font-12-16">{blog ? new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(blog.published_at)) : null}</h6>
                    </div>
                    <h2 className="rss-blog-detail__title font-28-48">{blog ? blog.title : "Blog not found."}</h2>
                    <img src={blog?.cover_image ?? undefined} alt="Banner Image" className="rss-blog-detail__img" />
                    {blog ? (
                        <div className="rss-blog-detail__body" dangerouslySetInnerHTML={{ __html: blog.body_html }} />
                    ) : (
                        <div className="rss-blog-detail__body">Blog not found.</div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetail;
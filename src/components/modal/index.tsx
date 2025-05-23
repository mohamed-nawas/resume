import { useEffect, useState } from 'react';

const Modal = () => {
    const isProd = process.env.NODE_ENV === 'production';
    const [show, setShow] = useState(false);

    useEffect(() => {
        const dismissed = sessionStorage.getItem('cvModalDismissed');
        if (!dismissed) {
            const timer = setTimeout(() => {
                setShow(true);
            }, 7000);
            return () => clearTimeout(timer);
        }
    }, []);

    const closeModal = () => {
        setShow(false);
        sessionStorage.setItem('cvModalDismissed', 'true');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const textarea = form.elements.namedItem('message') as HTMLTextAreaElement;
        if (textarea.value.trim()) {
            alert(`Message sent: ${textarea.value}`);
            closeModal();
        } else {
            alert('Please enter a message.');
        }
    };

    if (!show) return null;

    return (
        <div className="rss-modal">
            <div className="rss-modal__content">
                <span className="rss-modal__content__close-btn" onClick={closeModal}>&times;</span>
                <h2 className="rss-modal__content__title font-18-28">Considering a Project?</h2>
                <h4 className="rss-modal__content__slug font-16-20">See how my experience aligns with your needs.</h4>
                <form onSubmit={handleSubmit}>
                    <textarea name="message" placeholder="Leave a Quick Message..." required />
                    <div className="rss-modal__content__btn-container">
                        <a
                            href={`${isProd ? import.meta.env.BASE_URL + '/docs/Resume_Final.pdf' : '/docs/Resume_Final.pdf'}`}
                            download
                            className="rss-modal__content__btn-container__download-btn font-14-18"
                        >
                            Download CV ⤓
                        </a>
                        <button type="submit" className="rss-modal__content__btn-container__submit-btn font-14-18">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;

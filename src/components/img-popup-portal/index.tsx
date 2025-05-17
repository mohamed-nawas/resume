import ReactDOM from "react-dom";

export default function ImagePopupPortal({src, onClose}: {src: string, onClose: () => void}) : JSX.Element {
    return ReactDOM.createPortal(
        <div className="image-popup-overlay" onClick={onClose}>
            <div className="image-popup-container" onClick={e => e.stopPropagation()}>
                <img src={src} alt="Expanded" />
            </div>
        </div>,
        document.body
    );
};
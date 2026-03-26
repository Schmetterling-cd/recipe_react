import '../styles/components/IconButton.css';

const IconButton = ({ children, size, className = '', disabled = false, onClick }) => {
    return (
        <button className={`bg-transparent border-0 d-flex flex-column justify-content-center align-items-center h-100 mx-0 my-0 px-0 py-0 bseu-icon ` + className}
            style={{ width: size, height: size }}
            type="button"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default IconButton;
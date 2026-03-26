import '../styles/layouts/CardLayout.css';

const CardLayout = ({ children, style = '', className = '' }) => {
    return (
        <div
            className={`page-component shadow bg-body-tertiary border border-1 border-secondary border-opacity-10 mb-3 ${className}`}
            style={ style }
        >
            { children }
        </div>
    );
};

export default CardLayout;
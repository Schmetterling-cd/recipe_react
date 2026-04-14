import '../styles/layouts/PageComponentLayout.css';

const PageComponentLayout = ({ children }) => {
    return (
        <div className="page-component w-100 shadow bg-body-tertiary border border-1 border-secondary border-opacity-10 mb-3">
            {children}
        </div>
    );
};

export default PageComponentLayout;
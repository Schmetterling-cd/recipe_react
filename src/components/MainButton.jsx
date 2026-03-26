const MainButton = ({ action, icon = '', label = '' }) => {
    return (
        <button
            className="gap-1 translate-y-n1-on-hover font-size-0-9-rem font-weight-500 px-3 py-0 mx-0 my-0 background-main text-white border border-0 rounded-3 cursor-pointer d-flex flex-row justify-content-center align-items-center"
            onClick={() => action()}
            style={{ minHeight: '45px', minWidth: '150px' }}
        >
            {icon ? <i className={`bi bi-${icon}`} /> : null}
            {label}
        </button>
    );
};

export default MainButton;
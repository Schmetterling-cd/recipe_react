const LoginLayout = ({ children }) => {
    return (
        <div
            className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
            style={{
                backgroundColor: 'var(--main-system-color)',
                zIndex: 9998
            }}
        >
            {children}
        </div>
    )
};

export default LoginLayout
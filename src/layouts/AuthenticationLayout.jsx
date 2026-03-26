import LoginLayout from "../layouts/LoginLayout";
import CardLayout from "../layouts/CardLayout";
import BookImg from "../assets/images/cooking-book.png";

const AuthenticationLayout = ({ children, title, footer }) => {
    return (
        <LoginLayout>
            <CardLayout
                style={{
                    minWidth: 'max-content',
                    minHeight: 'max-content',
                }}
                className="d-flex flex-column justify-content-center align-items-center gap-3"
            >
                <img src={BookImg} alt="Book" style={{ maxWidth: '100px' }} />
                <h2>{title}</h2>

                <form className="d-grid gap-3" style={{ width: '300px' }}>
                    {children}
                </form>

                <div className="login-footer d-flex flex-column align-items-center justify-content-center">
                    {footer}
                    <small>Back to&nbsp;<a href="/">Home</a>&nbsp;page.</small>
                </div>
            </CardLayout>
        </LoginLayout>
    );
}

export default AuthenticationLayout;
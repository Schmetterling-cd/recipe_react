import AuthenticationLayout from "../layouts/AuthenticationLayout";

const EmailVerificationPage = () => {
    const user = {
        email: 'example@example.com'
    };

    return (
        <AuthenticationLayout
            title={'Email Verification'}
            footer={(<p className='mb-0'>I confirmed my email.</p>)}
        >
            <div className="form-message d-grid gap-1">
                        <p>
                            We have sent an email with a link to reset your password to the address&nbsp;
                            <strong>{user.email}</strong>.
                            Please check your email and follow the link in the email.
                        </p>

                        <div className="d-flex flex-column align-items-start">
                            <h5>Didn't receive the letter?</h5>

                            <ul className="d-flex flex-column align-items-start">
                                <li>Check your spam folder</li>
                                <li>Make sure your email is correct</li>
                                <li>Please wait a few minutes</li>
                            </ul>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary">Resend the link</button>
        </AuthenticationLayout>
    );
}

export default EmailVerificationPage;
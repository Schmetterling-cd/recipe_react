import { useState } from 'react';
import AuthenticationLayout from '../layouts/AuthenticationLayout';

const ForgotPasswordPage = () => {
    const [form, setForm] = useState({
        email: '',
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const EmailInput = (
        <div className="form-group">
            <label>Email address</label>
            <input placeholder="your@email.com" name='email' type="email" className="form-control" onChange={handleChange} value={form.email} />
        </div>
    );

    const sendForm = (e) => {
        setIsSent(true);
    };

    const message = isSent
        ? <div className="form-message d-grid gap-1">
            <p>
                We have sent an email with a link to reset your password to the address&nbsp;
                <strong>{form.email}</strong>.
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
        : <p className="form-message">Enter your email address and we will send you a link to reset your password.</p>
    ;

    const buttonText = isSent ? 'Resend the link' : 'Send a link';


    return (
        <AuthenticationLayout
            title={'Password recovery'}
            footer={<p className='mb-0'>Remembered your password?&nbsp;<a href="/login">Log in</a></p>}
        >
            {message}
            {isSent === false && EmailInput}
            <button type="button" className="btn btn-primary" onClick={sendForm}>{buttonText}</button>
        </AuthenticationLayout>
    );
}

export default ForgotPasswordPage;
import { useState } from 'react';
import PasswordInput from "../components/PasswordInput";
import AuthenticationLayout from '../layouts/AuthenticationLayout';

const ChangePasswordPage = () => {
    const [form, setForm] = useState({
        password: '',
        'confirm_password': ''
    });

    const [passwordMatch, setPasswordMatch] = useState(true);

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;

        setForm(prev => {
            const newForm = { ...prev, [name]: value };

            if (newForm.password !== '' && newForm.confirm_password !== '') {
                setPasswordMatch((newForm.password === newForm.confirm_password));
            } else {
                setPasswordMatch(true);
            }

            return newForm;
        });
    };

    return (
        <AuthenticationLayout
            title={'Change password'}
            footer={<p className='mb-0'>Remembered your password?&nbsp;<a href="/login">Log in</a></p>}
        >
            <p className="form-message">Enter a new password for your account.</p>
            <PasswordInput
                name="password"
                value={form.password}
                onChange={handlePasswordChange}
                label='New Password'
            />
            <PasswordInput
                name="confirm_password"
                value={form.confirm_password}
                onChange={handlePasswordChange}
                label='Confirm password'
                className={passwordMatch ? '' : 'is-invalid'}
            />
            <button type="submit" className="btn btn-primary">Reset password</button>
        </AuthenticationLayout>
    );
}

export default ChangePasswordPage;
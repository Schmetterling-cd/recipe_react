import { useState } from 'react';
import '../styles/pages/RegisterPage.css';
import PasswordInput from "../components/PasswordInput";
import AuthenticationLayout from '../layouts/AuthenticationLayout';

const RegisterPage = () => {
    const [form, setForm] = useState({
        email: '',
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <AuthenticationLayout
            title={'Register'}
            footer={<p className='mb-0'>Already have an account?&nbsp;<a href="/login">Log in</a></p>}
        >
            <div className="form-group">
                <label>Email address</label>
                <input placeholder="your@email.com" name='email' type="email" className="form-control" onChange={handleChange} value={form.email} />
            </div>
            <PasswordInput
                name="password"
                value={form.password}
                onChange={handlePasswordChange}
                label='Password'
            />
            <PasswordInput
                name="confirm_password"
                value={form.confirm_password}
                onChange={handlePasswordChange}
                label='Confirm password'
                className={passwordMatch ? '' : 'is-invalid'}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
        </AuthenticationLayout>
    );
}

export default RegisterPage;
import { useState } from 'react';
import '../styles/pages/LoginPage.css';
import PasswordInput from "../components/PasswordInput";
import AuthenticationLayout from '../layouts/AuthenticationLayout';

const LoginPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <AuthenticationLayout
            title={'Login'}
            footer={<p className='mb-0'>Don't have an account yet?&nbsp;<a href="/register">Register</a></p>}
        >
            <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="your@email.com" className="form-control" name="email" onChange={handleChange} value={form.email} />
            </div>
            <PasswordInput
                name="password"
                value={form.password}
                onChange={handleChange}
                label={'Password'}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
        </AuthenticationLayout>
    );
};

export default LoginPage;
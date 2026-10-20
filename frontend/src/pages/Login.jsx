import { useState } from 'react';
import { useNavigate } from 'react-router';

import api from '../api/axios';
import '../style/auth.css';

import { useAuth } from '../context/AuthConetxt';
import { Link } from 'react-router-dom';

const Login = () => {
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await api.post('/users/login', formData);

            localStorage.setItem(
                'user',
                JSON.stringify(response.data.user)
            );

            setIsAuthenticated(true);
            navigate('/frontal');
        } catch (err) {
            setError(
                err.response?.data?.message ||
                'Unable to sign in. Please check your credentials and try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="auth-page">
            <div className="auth-layout">

                {/* Left: Branding panel */}
                <section className="auth-brand-panel">
                    <div className="brand-content">
                        <div className="brand-logo">
                            <span className="brand-logo-icon">
                                <svg
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="36"
                                        height="36"
                                        rx="12"
                                        fill="currentColor"
                                        fillOpacity="0.13"
                                    />
                                    <path
                                        d="M20 10V30M10 20H30"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>

                            <span>PMA<span className="brand-dot">.</span></span>
                        </div>

                        <div className="brand-message">
                            <span className="brand-eyebrow">
                                PATIENT MANAGEMENT APPLICATION
                            </span>

                            <h1>
                                Better care.
                                <br />
                                <span>Smarter practice.</span>
                            </h1>

                            <p>
                                Your clinic, your patients, your workflow —
                                all in one secure workspace.
                            </p>
                        </div>

                        <div className="brand-feature">
                            <div className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 3L20 6V11C20 16 16.5 19.5 12 21C7.5 19.5 4 16 4 11V6L12 3Z"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.5 12L11 14.5L15.5 10"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <div>
                                <strong>Built for your clinic</strong>
                                <p>
                                    Patient records and appointments
                                    in one organized place.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="brand-decoration decoration-one" />
                    <div className="brand-decoration decoration-two" />

                    <div className="brand-bottom">
                        <span>SIMPLIFY YOUR PRACTICE</span>
                        <span className="brand-status">
                            <span className="status-dot" />
                            Your clinic workspace
                        </span>
                    </div>
                </section>

                {/* Right: Login form */}
                <section className="auth-form-panel">
                    <div className="login-content">
                        <div className="login-mobile-brand">
                            <span className="mobile-brand-icon">+</span>
                            PMA<span className="brand-dot">.</span>
                        </div>

                        <div className="login-heading">
                            <span className="welcome-label">
                                WELCOME BACK
                            </span>

                            <h2>Sign in to PMA</h2>

                            <p>
                                Enter your credentials to access your
                                clinic dashboard.
                            </p>
                        </div>

                        <form
                            className="auth-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="form-field">
                                <label htmlFor="username">
                                    Username
                                </label>

                                <div className="input-wrapper">
                                    <svg
                                        className="input-icon"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <circle
                                            cx="12"
                                            cy="8"
                                            r="4"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                        />
                                        <path
                                            d="M4 21C4 16.6 7.6 14 12 14C16.4 14 20 16.6 20 21"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                    <input
                                        id="username"
                                        type="text"
                                        name="username"
                                        placeholder="Enter your username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        autoComplete="username"
                                        required
                                        disabled={loading}
                                    />
                                </div>
                            </div>

                            <div className="form-field">
                                <div className="password-label-row">
                                    <label htmlFor="password">
                                        Password
                                    </label>
                                </div>

                                <div className="input-wrapper">
                                    <svg
                                        className="input-icon"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <rect
                                            x="4"
                                            y="10"
                                            width="16"
                                            height="11"
                                            rx="2.5"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                        />
                                        <path
                                            d="M8 10V7A4 4 0 0 1 16 7V10"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                    <input
                                        id="password"
                                        type={
                                            showPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                        required
                                        disabled={loading}
                                    />

                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        aria-label={
                                            showPassword
                                                ? 'Hide password'
                                                : 'Show password'
                                        }
                                    >
                                        {showPassword ? (
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M3 3L21 21M10.6 10.7A2 2 0 0 0 13.4 13.4M9.9 5.2A10.8 10.8 0 0 1 12 5C17 5 20.5 9.5 21 12C20.7 13.2 19.8 14.5 18.5 15.6M6.2 6.2C4.3 7.5 3.3 9.5 3 12C3.5 14.5 7 19 12 19C13.2 19 14.3 18.8 15.3 18.3"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M3 12S6 5 12 5S21 12 21 12S18 19 12 19S3 12 3 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="3"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <div
                                    className="auth-error"
                                    role="alert"
                                >
                                    <span aria-hidden="true">!</span>
                                    {error}
                                </div>
                            )}

                            <button
                                className="auth-submit"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="loading-spinner" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign in to your account
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M5 12H19M12 5L19 12L12 19"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </>
                                )}
                            </button>
                            {/* <div className="login-footer">
                                <p>Don't have an account? <Link to="/contact">Contact us</Link></p>
                            </div> */}
                        </form>

                        <div className="login-security">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 3L20 6V11C20 16 16.5 19.5 12 21C7.5 19.5 4 16 4 11V6L12 3Z"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M9 12L11 14L15 10"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <span>
                                Secure sign-in to your clinic workspace
                            </span>
                        </div>

                        <p className="login-copyright">
                            © {new Date().getFullYear()} PMA.
                            All rights reserved.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Login;
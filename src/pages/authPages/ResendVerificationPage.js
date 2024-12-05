import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "../../assets/styles/authStyles/resendVerification.css"

const ResendVerificationPage = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleResendClick = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loader if needed
        try {
            const response = await fetch('https://ecoscope-backend.onrender.com/api/auth/resend-verification-link', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            if (response.ok) {
                toast.success(data.message || 'Verification link sent!');
                setEmail(''); // Clear email field after successful submission
            } else {
                toast.error(data.message || 'Failed to send verification link');
            }
        } catch (error) {
            toast.error('Something went wrong! Please try again.');
        } finally {
            setIsLoading(false); // Stop loader
        }
    };

    return (
        <>
        <ToastContainer/>
        <div class="verification-dark">
            <h2>Resend Verification Link</h2>
            <p>Enter your email to send verification link.</p>
            <input
            className='verification_input'
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
            />
            <button class="dark-btn" onClick={handleResendClick} disabled={isLoading}>
                {isLoading ? 'Resending...' : 'Resend Verification'}
            </button>
        </div>
        </>
    );
};

export default ResendVerificationPage;

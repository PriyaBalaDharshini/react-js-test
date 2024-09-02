import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function LogIn() {
    const [credentials, setCredentials] = useState({ name: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            toast.error("No user found. Please sign up.");
            return;
        }

        if (user.name !== credentials.name) {
            toast.error("Invalid Name");
            setError("Invalid Name");
            return;
        }

        if (user.password !== credentials.password) {
            toast.error("Invalid Password");
            setError("Invalid Password");
            return;
        }

        toast.success("Login Successful");
        setError('');
        navigate('/movies');
    };



    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center shadow-lg p-8 bg-blue-100 rounded-lg h-auto w-[30vw]">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Login Page</h3>
                <form className="w-full space-y-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-700 mb-1 font-semibold">Name:</label>
                        <input
                            type="text"
                            id="name"
                            required
                            placeholder='Name'
                            className='rounded-lg p-2 border border-gray-300'
                            name='name'
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-700 mb-1 font-semibold">Password:</label>
                        <input
                            type="password"
                            id="password"
                            required
                            placeholder='Password'
                            className='rounded-lg p-2 border border-gray-300'
                            name='password'
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg" onClick={() => navigate("/sign-up")}>
                    Signup
                </button>
                {error && <p className='text-center text-red-500 mt-4'>{error}</p>}
            </div>
        </div>
    );
}

export default LogIn;

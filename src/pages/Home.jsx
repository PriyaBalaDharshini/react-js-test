import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center p-8">
                <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>

                <button
                    onClick={() => navigate('/company-info')}
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg mr-5"
                >
                    Company Info
                </button>
                <div className="space-y-4">
                    <button
                        onClick={() => navigate('/sign-up')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-5"
                    >
                        Sign Up
                    </button>
                    <button
                        onClick={() => navigate('/log-in')}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg"
                    >
                        Log In
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function CompanyInfo() {

    const navigate = useNavigate()
    return (
        <div className="flex flex-row items-center justify-center min-h-screen bg-gray-50 p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg flex items-center justify-center flex-col">
                <h2 className="text-2xl font-bold mb-4">Company Information</h2>
                <p className="mb-2"><strong>Company:</strong> Geeksynergy Technologies Pvt Ltd</p>
                <p className="mb-2"><strong>Address:</strong> Sanjayanagar, Bengaluru-56</p>
                <p className="mb-2"><strong>Phone:</strong> ##########</p>
                <p><strong>Email:</strong> ########@gmail.com</p>
                <button className='bg-pink-300 p-2 rounded-md px-4 mt-5' onClick={() => navigate("/")}>Home</button>
            </div>

        </div>
    );
}

export default CompanyInfo;

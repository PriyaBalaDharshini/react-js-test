import React from 'react';

function CompanyInfo() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Company Information</h2>
                <p className="mb-2"><strong>Company:</strong> Geeksynergy Technologies Pvt Ltd</p>
                <p className="mb-2"><strong>Address:</strong> Sanjayanagar, Bengaluru-56</p>
                <p className="mb-2"><strong>Phone:</strong> ##########</p>
                <p><strong>Email:</strong> ########@gmail.com</p>
            </div>
        </div>
    );
}

export default CompanyInfo;

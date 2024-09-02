import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
        phone: "",
        profession: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(formData))
        toast.success("Details Saved Successfully")
        navigate("/log-in")
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center shadow-lg p-8 bg-blue-100 rounded-lg h-auto w-[30vw]">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Signup Page</h3>
                <form className="w-full space-y-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-gray-700 mb-1 font-semibold">Name:</label>
                        <input
                            type="text"
                            id="name"
                            required
                            placeholder='Name'
                            className='rounded-lg p-2 border border-gray-300'
                            onChange={handleChange}
                            name='name'
                            value={formData.name}
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
                            onChange={handleChange}
                            name='password'
                            value={formData.password}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 mb-1 font-semibold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder='Email'
                            className='rounded-lg p-2 border border-gray-300'
                            onChange={handleChange}
                            name='email'
                            value={formData.email}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-gray-700 mb-1 font-semibold">Phone Number:</label>
                        <input
                            type="text"
                            id="phone"
                            required
                            placeholder='Phone Number'
                            className='rounded-lg p-2 border border-gray-300'
                            onChange={handleChange}
                            name='phone'
                            value={formData.phone}

                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="profession" className="text-gray-700 mb-1 font-semibold">Profession:</label>
                        <select
                            name="profession"
                            id="profession"
                            required
                            className='rounded-lg p-2 border border-gray-300'
                            onChange={handleChange}
                            value={formData.profession}

                        >
                            <option value="FSD">Full Stack Developer</option>
                            <option value="FD">Frontend Developer</option>
                            <option value="BD">Backend Developer</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Signup
                    </button>

                    <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg" onClick={() => navigate("/log-in")}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp
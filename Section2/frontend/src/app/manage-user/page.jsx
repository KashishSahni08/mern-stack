'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IconTrash, IconUserSquareRounded, IconPencil } from '@tabler/icons-react';

const ManageUser = () => {
    const [userData, setUserData] = useState([]);
    const fetchUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getall');
        setUserData(res.data);
    };
    useEffect(() => {
        fetchUserData();
    }, []);
    return (
        <div className='min-h-screen bg-gray-100 py-10'>
            <div className='container mx-auto'>
                <h2 className='text-center font-bold text-3xl'>
                    ManageUser
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        userData.map((user) => (
                            <div key={user.id || user._id} className='bg-white p-6 rounded-lg shadow-lg'>
                                <div className='flex gap-4 items-center'>
                                    <IconUserSquareRounded className='text-purple-400' size={100} />
                                    <div>
                                        <h3 className='font-semibold text-2xl'>{user.name}</h3>
                                        <p className='text-gray-500'>{user.email}</p>
                                        <p>From {user.city} city</p>
                                        <div className='flex gap-4 mt-4'>
                                            <button className='bg-blue-50 text-blue-500 rounded-xl p-2'>
                                                <IconPencil />
                                            </button>
                                            <button className='bg-red-50 text-red-500 rounded-xl p-2'>
                                                <IconTrash />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default ManageUser;
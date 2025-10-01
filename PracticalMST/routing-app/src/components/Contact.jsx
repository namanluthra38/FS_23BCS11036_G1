import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Contact = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center mt-10">
        <Nav />
        <h1 className="text-4xl font-bold mt-10 text-green-600">Contact Page</h1>
    </div>
);

export default Contact;
import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';

const About = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center mt-10">
        <Nav />
        <h1 className="text-4xl font-bold mt-10 text-purple-500">About Page</h1>
    </div>
);

export default About;
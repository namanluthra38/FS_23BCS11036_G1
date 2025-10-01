import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center mt-10">
            <Nav className=""/>
            <h1 className="text-4xl font-bold mt-10 text-blue-600">Home Page</h1>
        </div>
    );
}




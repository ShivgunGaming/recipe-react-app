import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 shadow-md fixed top-0 left-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-white text-2xl font-bold">Recipe App</h1>
                    </div>
                   
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

import React from 'react';

const Loader = ({ isExiting }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-gradient-radial from-[#323232] to-[#53524d] z-50 transition-transform duration-700 ${isExiting ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div className="flex gap-2">
                <div className="font-yeseva lg:text-8xl text-6xl animate-hourglassS lg:w-36 lg:h-36 w-24 h-24 rounded-full border border-white text-center place-content-center">
                    S
                </div>
            </div>
        </div>
    );
};


export default Loader;

import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-stone-800 to-stone-950  z-50">
            <div class="flex gap-2">
                <div class="w-5 h-5 rounded-full animate-pulse bg-amber-600"></div>
                <div class="w-5 h-5 rounded-full animate-pulse bg-amber-600"></div>
                <div class="w-5 h-5 rounded-full animate-pulse bg-amber-600"></div>
            </div>
        </div>
    );
};

export default Loader;

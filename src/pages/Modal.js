import React from 'react';

const Modal = ({ isVisible, message, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <img className="w-2/3 lg:w-4/5 md:w-1/2 mx-auto p-5" src="/assets/images/email-sent.png" alt="Email successfully sended" />
                <p className="text-lg font-semibold mb-4 text-center">{message}</p>
                <div className="justify-center text-center">
                    <button onClick={onClose} className="relative h-12 md:h-12 w-64 md:w-60 overflow-hidden border border-[#FF8B00] text-[#FF8B00] text-lg lg:text-2xl tracking-widest font-light shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#FF8B00] before:duration-300 before:ease-out hover:text-white hover:shadow-[#fdbe74b8] hover:before:h-40 hover:before:w-80 hover:before:opacity-80">
                        <span className="relative z-10">OK</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

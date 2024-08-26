// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { db } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import Modal from './Modal';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const [formValidity, setFormValidity] = useState({
//         name: false,
//         email: false,
//         message: false
//     });

//     const [modal, setModal] = useState({
//         isVisible: false,
//         message: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setFormData({
//             ...formData,
//             [name]: value
//         });

//         setFormValidity({
//             ...formValidity,
//             [name]: validateField(name, value)
//         });
//     };

//     const validateField = (fieldName, value) => {
//         if (fieldName === 'name') {
//             return value.trim() !== '';
//         }

//         if (fieldName === 'email') {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             return emailRegex.test(value);
//         }

//         if (fieldName === 'message') {
//             return value.trim() !== '';
//         }

//         return false;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Check if all fields are valid before submitting
//         const allValid = Object.values(formValidity).every(Boolean);

//         if (!allValid) {
//             setModal({
//                 isVisible: true,
//                 message: 'Please fill in all fields correctly.'
//             });
//             return;
//         }

//         try {
//             await addDoc(collection(db, 'contact-form'), formData); 
//             setModal({
//                 isVisible: true,
//                 message: 'Form submitted successfully!'
//             });
//             setFormData({
//                 name: '',
//                 email: '',
//                 message: ''
//             });
//         } catch (error) {
//             setModal({
//                 isVisible: true,
//                 message: 'Error submitting form. Please try again.'
//             });
//             console.error('Error submitting form: ', error);
//         }
//     };

//     const handleCloseModal = () => {
//         setModal({
//             isVisible: false,
//             message: ''
//         });
//         navigate('/');
//     };

//     const isButtonDisabled = !(formValidity.name && formValidity.email && formValidity.message);

//     return (
//         <section className="h-screen bg-[#040404]" id="about_me">
//             <div className="pt-10 flex flex-col items-center justify-center h-full">
//                 <div className="text-white lg:text-4xl text-2xl font-bold text-center">
//                     <span className="underline underline-offset-8 decoration-4 decoration-[#FF8B00] text-[#FF8B00]">Contact</span>
//                     <span> Me</span>
//                 </div>
//                 <div className="text-white text-sm lg:text-xl font-bold text-center py-5 animate-slidein500 opacity-0">
//                     Feel free to reach out to me! Whether you have a question, feedback, or a service, I’d love to hear from you
//                 </div>
//                 <div className="md:w-4/5 w-[20rem] lg:w-2/3 p-1 lg:p-5 animate-slidein500 opacity-0">
//                     <div className="mx-auto lg:px-4 container grid grid-cols-1 lg:grid-cols-1 gap-8 pb-1 lg:pb-5">
//                         <form onSubmit={handleSubmit}>
//                             <div className="flex flex-wrap -mx-3 mb-6">
//                                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                                     <label className="block uppercase tracking-wide text-[#FF8B00] text-xs font-bold mb-2" htmlFor="name">
//                                         Name
//                                     </label>
//                                     <input
//                                         className={`appearance-none block w-full text-white border border-[#FF8B00] rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${formValidity.name ? 'bg-yellow-800 transition-all duration-500' : 'bg-[#373737]'
//                                             }`}
//                                         id="name"
//                                         type="text"
//                                         placeholder="Soffia"
//                                         value={formData.name}
//                                         name="name"
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="w-full md:w-1/2 px-3">
//                                     <label className="block uppercase tracking-wide text-[#FF8B00] text-xs font-bold mb-2" htmlFor="email">
//                                         Email
//                                     </label>
//                                     <input
//                                         className={`appearance-none block w-full text-white border border-[#FF8B00] rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${formValidity.email ? 'bg-yellow-800 transition-all duration-500' : 'bg-[#373737]'
//                                             }`}
//                                         id="email"
//                                         type="email"
//                                         placeholder="soffia@text.com"
//                                         value={formData.email}
//                                         name="email"
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="flex flex-wrap -mx-3 mb-6">
//                                 <div className="w-full px-3">
//                                     <label className="block uppercase tracking-wide text-[#FF8B00] text-xs font-bold mb-2" htmlFor="message">
//                                         Message
//                                     </label>
//                                     <textarea
//                                         rows="5"
//                                         className={`appearance-none block w-full bg-[#373737] text-white border border-[#FF8B00] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#373737] ${formValidity.message ? 'bg-yellow-800 transition-all duration-500' : 'bg-[#373737]'
//                                             }`}
//                                         id="message"
//                                         type="text"
//                                         placeholder="I would like to..."
//                                         value={formData.message}
//                                         name="message"
//                                         onChange={handleChange}
//                                     ></textarea>
//                                 </div>
//                             </div>
//                             <div className="flex flex-wrap mb-6 justify-center">
//                                 <button
//                                     type="submit"
//                                     className={`relative h-12 md:h-16 w-64 md:w-80 overflow-hidden border border-[#FF8B00] text-[#FF8B00] text-lg lg:text-2xl tracking-widest font-light shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#FF8B00] before:duration-300 before:ease-out hover:text-white hover:shadow-[#fdbe74b8] hover:before:h-40 hover:before:w-80 hover:before:opacity-80 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
//                                         }`}
//                                     disabled={isButtonDisabled}
//                                 >
//                                     <span className="relative z-10">SUBMIT</span>
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Modal
//                 isVisible={modal.isVisible}
//                 message={modal.message}
//                 onClose={handleCloseModal}
//             />
//         </section>
//     );
// };

// export default Contact;

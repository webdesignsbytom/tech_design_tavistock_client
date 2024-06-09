import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Data
import { emptyContactFormData } from '../../utils/ContactFormDataUtils';

function ContactPage() {
  const [formData, setFormData] = useState(emptyContactFormData);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission logic here
      console.log('Form data submitted:', formData);
      // Clear the form and errors
      setFormData(emptyContactFormData);
      setErrors({});
    }
  };

  return (
    <div className='min-h-screen w-full'>
      <div className='grid w-full h-full'>
        {/* Header container */}
        <div className='grid grid-rows-reg w-full overflow-y-scroll scrollbar-hidden bg-main-bg'>
          {/* Navigation */}
          <Navbar />
          <main className='flex flex-col items-center justify-center p-4'>
            <h1 className='text-4xl font-bold mb-8'>Contact Us</h1>
            <form
              onSubmit={handleSubmit}
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'
            >
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='firstName'
                >
                  First Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.firstName ? 'border-red-500' : ''
                  }`}
                  required
                />
                {errors.firstName && (
                  <p className='text-red-500 text-xs italic'>
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='lastName'
                >
                  Last Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.lastName ? 'border-red-500' : ''
                  }`}
                  required
                />
                {errors.lastName && (
                  <p className='text-red-500 text-xs italic'>
                    {errors.lastName}
                  </p>
                )}
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Email <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  required
                />
                {errors.email && (
                  <p className='text-red-500 text-xs italic'>{errors.email}</p>
                )}
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='phoneNumber'
                >
                  Phone Number (optional)
                </label>
                <input
                  type='text'
                  id='phoneNumber'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='location'
                >
                  Location (optional)
                </label>
                <input
                  type='text'
                  id='location'
                  name='location'
                  value={formData.location}
                  onChange={handleChange}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='businessName'
                >
                  Business Name (optional)
                </label>
                <input
                  type='text'
                  id='businessName'
                  name='businessName'
                  value={formData.businessName}
                  onChange={handleChange}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='mb-6'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='message'
                >
                  Message <span className='text-red-500'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  required
                />
                {errors.message && (
                  <p className='text-red-500 text-xs italic'>
                    {errors.message}
                  </p>
                )}
              </div>
              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Send
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

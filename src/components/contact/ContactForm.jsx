import React, { useState } from 'react';
// Data
import { emptyContactFormData } from '../../utils/ContactFormDataUtils';
import ButtonComponent from '../global/ButtonComponent';
// Api
import client from '../../api/client';

function ContactForm({ setMessageModalOpen, setHasSubmissionFailed }) {
  const [formData, setFormData] = useState(emptyContactFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    setIsSubmitting(true);
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      client
        .post('/contact/contact-submit', formData, false)
        .then((res) => {
        })

        .catch((err) => {
          console.error('Unable to submit', err);
          setIsSubmitting(false);
          setHasSubmissionFailed(true)
          setMessageModalOpen(true)
        });

      setFormData(emptyContactFormData);
      setErrors({});
      setIsSubmitting(false);
      setHasSubmissionFailed(false)
      setMessageModalOpen(true)
    }
  };

  const projectTypes = [
    { value: 'WEB', label: 'Web' },
    { value: 'APP', label: 'App' },
    { value: 'SOFTWARE', label: 'Software' },
    { value: 'CIRCUITS', label: 'Circuits' },
    { value: 'OTHER', label: 'Other' },
  ];

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded px-8 py-8 w-full max-w-lg'
      >
        <section className='lg:grid lg:grid-cols-2 gap-2'>
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
              autoComplete='on'
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.firstName ? 'border-red-500' : ''
              }`}
              required
            />
            {errors.firstName && (
              <p className='text-red-500 text-xs italic'>{errors.firstName}</p>
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
              autoComplete='on'
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.lastName ? 'border-red-500' : ''
              }`}
              required
            />
            {errors.lastName && (
              <p className='text-red-500 text-xs italic'>{errors.lastName}</p>
            )}
          </div>
        </section>
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
            autoComplete='on'
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? 'border-red-500' : ''
            }`}
            required
          />
          {errors.email && (
            <p className='text-red-500 text-xs italic'>{errors.email}</p>
          )}
        </div>
        <section className='lg:grid lg:grid-cols-2 gap-2'>
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
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='projectType'
            >
              Project Type (optional)
            </label>
            <select
              name='projectType'
              id='projectType'
              value={formData.projectType}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >
              {projectTypes.map((type) => (
                <option
                  key={type.value}
                  value={type.value}
                  className='bg-white'
                >
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section className='lg:grid lg:grid-cols-2 gap-2'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='phoneNumber'
            >
              Phone Number (optional)
            </label>
            <input
              type='tel'
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
        </section>
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
            <p className='text-red-500 text-xs italic'>{errors.message}</p>
          )}
        </div>
        <div className='grid items-center'>
          <div className='w-full'>
            <ButtonComponent
              label='Submit'
              type='submit'
              btnType='submit'
              btnValue='Submit'
              loading={isSubmitting}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

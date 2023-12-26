// src/components/Contact.js
import  { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission (you can add an API call here)

      // For demonstration purposes, we'll just log the form data
      console.log('Form submitted:', formData);

      setIsFormSubmitted(true);

      // Reset form data
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      // Form validation failed
      console.log('Form validation failed');
    }
  };

  return (
    <section className="bg-gray-100 p-8 mt-[100px]">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-600 mb-4">
        Feel free to reach out to me for any inquiries or collaboration opportunities.
      </p>
      {isFormSubmitted ? (
        <div className="bg-green-100 text-green-800 p-4 mb-4 rounded">
          Thanks for reaching out! I'll get back to you soon.
        </div>
      ) : (
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name" className="mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`p-2 mb-4 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formErrors.name && <p className="text-red-500 mb-2">{formErrors.name}</p>}

          <label htmlFor="email" className="mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`p-2 mb-4 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formErrors.email && <p className="text-red-500 mb-2">{formErrors.email}</p>}

          <label htmlFor="message" className="mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`p-2 mb-4 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
          ></textarea>
          {formErrors.message && <p className="text-red-500 mb-2">{formErrors.message}</p>}

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactPage;

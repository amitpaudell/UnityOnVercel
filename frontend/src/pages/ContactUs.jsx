import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

function ContactUs() {
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onSubmit',
  });

  // ✅ Combined handler: Send via EmailJS using validated form data
  const onSubmit = async (data) => {
    try {
      // Use EmailJS's sendForm (if using refs) or send (if sending manually)
      await emailjs.send(
        'service_vyt476l', // 🔹 from EmailJS dashboard
        'template_jy4zhow', // 🔹 your email template ID
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        'N937LFX-R-mgzNB_m' // 🔹 your public key
      );

      alert('✅ Message sent successfully!');
      reset(); // Clear the form
    } catch (error) {
      console.error('❌ Failed to send message:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      {/* Top Section */}
      <div>
        <div className="mt-16 container mx-auto flex flex-col space-y-5">
          <h1 className="font-bold mx-auto text-4xl ">Contact Us</h1>
          <p className="text-center mx-auto text-xl">
            Our dedicated experts are here to help you with any of your
            questions, contact us by filling out the form below and we will be
            in touch shortly.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-14 container mx-auto border-slate-400 shadow-2xl rounded-md p-8">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          {/* Error messages */}
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
          {errors.phone && (
            <p className="text-red-600">{errors.phone.message}</p>
          )}
          {errors.subject && (
            <p className="text-red-600">{errors.subject.message}</p>
          )}
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 3,
                    message: 'Name should be at least 3 characters',
                  },
                })}
                placeholder="Enter your name"
                className="border border-slate-400 px-4 py-4 rounded-md placeholder:text-xl"
              />
            </div>

            <div className="flex flex-col">
              <label>Email</label>
              <input
                type="text"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                placeholder="Enter your Email"
                className="border border-slate-400 px-4 py-4 rounded-md placeholder:text-xl"
              />
            </div>

            <div className="flex flex-col">
              <label>Phone</label>
              <input
                type="text"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Phone number must be exactly 10 digits',
                  },
                })}
                placeholder="Enter your phone number"
                className="border border-slate-400 px-4 py-4 rounded-md placeholder:text-xl"
              />
            </div>

            <div className="flex flex-col">
              <label>Subject</label>
              <input
                type="text"
                {...register('subject', {
                  required: 'Subject is required',
                  minLength: {
                    value: 3,
                    message: 'Subject should be at least 3 characters',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Subject should not exceed 50 characters',
                  },
                })}
                placeholder="Subject"
                className="border border-slate-400 px-4 py-4 rounded-md placeholder:text-xl"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label>Message</label>
            <textarea
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message should be at least 10 characters long',
                },
              })}
              cols="30"
              rows="10"
              placeholder="Enter your message"
              className="border border-slate-400 px-2 py-2 rounded-md placeholder:text-xl"
            ></textarea>
          </div>

          <div className="mt-6">
            <input
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? 'Submitting...' : 'Submit'}
              className="bg-[#1d54c8] text-white px-4 py-2 rounded-md cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

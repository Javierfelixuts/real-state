import React, { useState, type FormEvent } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import './style.css';
import { SvgSpinners90RingWithBg } from '~/components/icons/loaderSvg';

const ContactForm = () => {
  const initFormData = {
    name: '',
    email: '',
    message: '',
  }
  const [formData, setFormData] = useState(initFormData);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {

    e.preventDefault();
    setIsLoading(true);
    setFormData(initFormData)
    try {
      const response = await axios.post('/send-email.php', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el correo');
    }
    finally{
      setIsLoading(false)
    }
  };

  return (
    <div className={`relative px-4 md:px-6 md:py-16 text-default max-w-7xl mx-auto py-0 lg:py-0 intersect-once intersect-quarter motion-safe:md:opacity-0 motion-safe:md:intersect:animate-fade ${isLoading ? 'customOpacity' : '' }`}>
     {
      isLoading &&
       <SvgSpinners90RingWithBg className='spinner'/>
     }
      <div
        className="bg-white text-center flex justify-start max-w-xl mx-auto dark:bg-[#3c220f] shadow sm:p-6 lg:p-8 w-full backdrop-blur rounded-tr-lg rounded-tl-lg"
      >
        <div className="text-left m-4 text-sm">
          <h1 className="font-bold text-left text-4xl mb-2">CONTACT US</h1>
          <address>8230 E Broadway Blvd Suite E4, Tucson, AZ 85710 </address>
          <p>gustavo.aguilar@gj-realestate.com</p>
          <span>Phone:</span><span> (520) 886-9117</span>
          <p>Fax: (520) 423-3956</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-xl mx-auto  backdrop-blur border-gray-200 dark:border-gray-700 bg-white dark:bg-[#3c220f] shadow p-2 sm:px-6 lg:px-8 w-full">
          <input className='py-2 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#3c220f]' type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        </div>
        <div className="flex flex-col max-w-xl mx-auto  backdrop-blur border-gray-200 dark:border-gray-700 bg-white dark:bg-[#3c220f] shadow p-2 sm:px-6 lg:px-8 w-full">
          <input className='py-2 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#3c220f]' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        </div>
        <div className="flex flex-col max-w-xl mx-auto  backdrop-blur border-gray-200 dark:border-gray-700 bg-white dark:bg-[#3c220f] shadow p-2 sm:px-6 lg:px-8 w-full">
          <textarea className='py-2 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#3c220f]' name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
        </div>

        <div className="items-start flex max-w-xl mx-auto  backdrop-blur border-gray-200 dark:border-gray-700 bg-white dark:bg-[#3c220f] shadow p-2 sm:px-6 lg:px-8 w-full"  > 
          <div className="flex mt-0.5"  >
          <input id="disclaimer" name="disclaimer" type="checkbox" className="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900" />
        </div>
          <div className="ml-3" >
            <label htmlFor="disclaimer" className="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400" data-astro-source-loc="62:111"> By submitting this contact form, you acknowledge and agree to the collection of your personal information. </label>
          </div>
        </div>

        <div className="flex flex-col max-w-xl mx-auto  backdrop-blur bg-white dark:bg-[#3c220f] shadow p-4 sm:px-6 lg:px-8 w-full">
          <button className='btn-secondary dark:bg-[#7a5439]' type="submit" disabled={isLoading}>Contact us</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

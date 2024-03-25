import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_64gn44c', 'template_ljywhz2', form.current, {
          publicKey: 'nBVWMLvpt_Cq7c7QN',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='Nombre' required
        className=' my-6 lg:m-5 h-[80px] w-full bg-white/80 placeholder:text-black  pl-8 flex flex-col justify-between lg:h-[80px] lg:w-[702px]  rounded-[35px]'
        />
        <input type="email" name="user_email" placeholder='Email' required
         className='my-6 lg:m-5 h-[80px] w-full bg-white/80 placeholder:text-black  pl-8 flex flex-col justify-between lg:h-[80px] lg:w-[702px]  rounded-[35px]'
        />
        <textarea name="message" rows="4" placeholder='Asunto...' required
        className=' my-6 lg:ml-5 block lg:w-[700px] p-2.5 mt-[2rem] w-full  bg-white/80 placeholder:text-black  pl-8 border-none text-sm text-gray-900 bg-gray-50 rounded-[30px] border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black'/>
        <div className=' flex justify-center items-center'>
          <input onClick={() => {window.alert("Mensaje Enviado")}} type="submit" value="Send" className='bg-black mt-[2rem] text-white py-[0.6rem] px-[3rem] rounded-full'/>
        </div>
      </form>
    </div>
  );
}

export default Form;

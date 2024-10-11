import React, { useRef }from 'react'
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br />
      <input type="text" name="user_name" /> <br />
      <label>Email</label> <br />
      <input type="email" name="user_email" /> <br />
      <label>Message</label> <br />
      <textarea name="message" /> <br />
      <input type="submit" value="Send" /> <br />
    </form>
  );
};

export default ContactUs
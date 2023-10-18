import {useState} from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [invalid, setInvalid]  = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name && email) {
      alert(`Hello ${name}, You have successfully subscribed to our newsletter! You will receive our next newsletter!`);
      setName('');
      setEmail('');
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }

  return (
    <div className='p-6'>
      <div className='p-6 max-w-[650px] m-auto mt-[100px] bg-[#c0e7db] rounded-[40px] text-center'>
            <h2 className='font-bold text-lg mb-7'>Subscribe</h2>

            <form onSubmit={handleSubmit}>
              <input autoFocus value={name} onChange={(e) => setName(e.target.value)} className='border w-full mb-4 p-1 rounded-[15px] focus:outline-none text-center text-teal-500' type="text" placeholder="Your name" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='border w-full p-1 rounded-[15px] focus:outline-none text-center text-teal-500' type="email" placeholder='Your email' />

              {invalid && <p className='text-red-600 mt-3 text-sm'>All fields are required </p> }

              <button className='bg-black text-white px-16 py-2 mt-6 rounded-[20px]' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs;

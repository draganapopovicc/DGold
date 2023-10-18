import {useState, useEffect} from 'react'
import axios from 'axios';

const AboutUs = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, showError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setClients(res.data);
        setIsLoading(false)
      } )
      .catch(err => {
        showError(err);
        setIsLoading(false);
      });
  }, []);

  
  return (
    <div className="p-6">
      <h2 className='font-bold text-[35px] mb-4'> Our clients </h2>

      {isLoading ? <p className='font-bold text-lg mb-4'>Loading...</p> : 
        !error ?
          <div className='grid gap-3 sm:grid-cols-2 md:grid-cols-3'>
          {
            clients.map(({id, name, username,email, address : {city, street}}) => (
              <ul className='bg-[#222] even:bg-[#f24d4d] even:text-[#222] p-2 rounded-[15px] text-white text-sm' key={id}>
                <li> <span className='font-medium mr-2'>Name:</span>  {name}</li>
                <li> <span className='font-medium mr-2'>Username:</span>{username}</li>
                <li> <span className='font-medium mr-2'>Email:</span> {email}</li>
                <li> <span className='font-medium mr-2'>City:</span> {city}</li>
                <li> <span className='font-medium mr-2'>Street:</span> {street}</li>
              </ul>
            ))
          }
        </div> :
        <h3>Something went wrong...</h3>
      }
    </div>
  )
}

export default AboutUs;

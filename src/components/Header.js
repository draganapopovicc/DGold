import {useState} from 'react';
import { Link} from 'react-router-dom';

const Header = ({toggleTheme, theme}) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="header flex justify-between p-6 relative">
        <svg  onClick={() => setIsOpenMenu(true)} className={`cursor-pointer space-y-2 sm:hidden ${!isOpenMenu ? 'block': 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="-0.5 0 25 25" fill="none">
            <path d="M2 12.32H22" stroke={`${theme === 'light' ? "#222" : "#fff" }`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 18.32H22" stroke={`${theme === 'light' ? "#222" : "#fff" }`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 6.32001H22" stroke={`${theme === 'light' ? "#222" : "#fff" }`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <svg onClick={() => setIsOpenMenu(false)} className={`cursor-pointer space-y-2 sm:hidden ${!isOpenMenu ? 'hidden': 'block'}`} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1024 1024"><path fill={`${theme === 'light' ? "#222" : "#fff" }`} d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/></svg>

        <nav className={`${isOpenMenu ? 'absolute block top-full bg-[#e3e3e3] p-6 inset-x-0 text-center' : 'hidden'} sm:block sm:relative sm:p-0`}>
            <ul className='flex gap-x-5 flex-col sm:flex-row'>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>

        <div className='bg-white p-1 pb-0 inline-block rounded-full'>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div onClick={toggleTheme} className="w-9 h-5 bg-slate-200 peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-800"></div>
            </label>
        </div>
    </header>
  )
}

export default Header;

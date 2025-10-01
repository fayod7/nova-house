import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../shared/assets/nova-logo.svg'
import { Menu, Search, X } from 'lucide-react';
const Header = () => {
   const [isScroll, setIsScroll] = useState<boolean>(false)
   const [isOpen, setIsOpen] = useState<boolean>(false);
    useEffect(() => {
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  },[])
  return (
    <>
    <header className={`w-full text-white fixed left-0 z-40 ${isScroll ? 'bg-black/65 top-0' : 'backdrop-blur top-[30px] bg-black/30'}`}>
      <nav className="container flex items-center justify-between">
        <ul className={`gap-4 items-center hidden md:flex  text-[19px] ${isScroll ? 'text-sm' : 'text-[19px]'}`}>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/collections'}>Collections</Link>
          </li>
        </ul>
        <>
          <Link to={'/'} className={`${isScroll ? 'size-[75px]' : 'size-[100px]'}`}>
            <img src={logo} alt="" className='text-white'/>
          </Link>     
        </>
        <ul className={`gap-4 items-center  hidden md:flex text-[19px] ${isScroll ? 'text-sm' : 'text-[19px]'}`}>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/company'}>Company</Link>
          </li>
          <li>
            <Link to={'/search'}>
            <Search className={`${isScroll ? 'size-[20px]': 'size-[30px]'}`}/>
            </Link>
          </li>
        </ul>
         <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>
    </header>
    
    {isOpen && (
     <div onClick={() => setIsOpen(false)} className='fixed inset-0 z-[999] backdrop-blur-sm'>
<div className={`md:hidden bg-white text-black absolute top-0 w-[250px] duration-300 h-screen ${isOpen ? 'right-0' : 'left-[-250px]'}`}>
       <ul className="flex flex-col gap-4 p-6 text-lg">
         <li onClick={() => setIsOpen(false)} className='flex items-center gap-1.5'>Close <X className="w-7 h-7" /></li>
         <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
         
         <li><Link to="/collections" onClick={() => setIsOpen(false)}>Collections</Link></li>
         <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
         <li><Link to="/company" onClick={() => setIsOpen(false)}>Company</Link></li>
         <li><Link to="/search" onClick={() => setIsOpen(false)}>Search</Link></li>
       </ul>
     </div>

     </div>
   )}
    </>
  );
};

export default memo(Header);
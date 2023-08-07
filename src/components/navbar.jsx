import { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '/src/assets/hamburger.png'
import cross from '/src/assets/cross.png'

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav-container fixed top-10 w-full h-16 flex justify-center items-center">
      <ul 
        className={`${showMenu ? "flex" : "hidden"} 
        flex-col items-center w-full absolute top-2 pb-5 sm:flex sm:relative sm:flex-row sm:justify-center sm:top-0`}
        >
        <li className="mb-2 sm:mb-0">
          <Link to="/" className="text-white py-2 mx-2 sm:py-0 link">
            Accueil
          </Link>
        </li>
        <li className="mb-2 sm:mb-0">
          <Link to="/" className="text-white py-2 mx-2 sm:py-0 link">
            Mes projets
          </Link>
        </li>
        <li className="mb-2 sm:mb-0">
          <Link to="/contact" className="text-white py-2 mx-2 sm:py-0 link">
            Contact
          </Link>
        </li>
      </ul>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className='ml-auto sm:hidden'
        >
        <img 
          className="icon"
          src={showMenu ? cross : hamburger} alt="icon" 
        />
      </button>
    </nav>
  );
}

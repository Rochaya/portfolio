import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '/src/assets/hamburger.svg'
import Cross from '/src/assets/cross.svg'



export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className= "nav-container fixed top-10 w-full h-16 flex justify-center items-center">
        <div className= "list-container">
          <ul className= "flex space-x-4 ml-auto">
            <li>
              <Link to="/" className= "text-white py-2 mx-2 sm:py-0 link">
                Mes projets
              </Link>
            </li>
            <li>
              <Link to="/" className= "text-white py-2 mx-2 sm:py-0 link">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/contact" className= "text-white py-2 mx-2 sm:py-0 link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}


